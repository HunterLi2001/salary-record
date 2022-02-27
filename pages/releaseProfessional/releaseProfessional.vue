<template>
	<view class="releaseProfessional">
		<view class="header">
			<view class="header_logo">logo</view>
			<view class="header_list">
				<view class="header_tab" :class="{header_tab_line:tabStatus===1}" @click="changeTab(1)">普通职业</view>
				<view class="header_tab" :class="{header_tab_line:tabStatus===2}" @click="changeTab(2)">新兴职业</view>
			</view>
		</view>

		<view class="info_item">
			<view class="label"><span class="required_label">*</span>公司</view>
			<view class="inp">
				<uni-collapse>
					<uni-collapse-item title-border="none" :border="false" :show-arrow="false" :open="showCollapse">
						<template v-slot:title>
							<!-- TODO 使用uni-easyinput时在微信端无法调用keyup和keydown事件响应函数。 -->
							<uni-easyinput v-model="company" placeholder="输入公司名称" @blur="closeCollapse"
								@focus="openCollapse" @keyup="quickShowInputCompany(company.trim(),companyList,3)">
							</uni-easyinput>
						</template>
						<view class="content">
							<view v-for="item in alternativeCompany" @click="company = item">{{item}}</view>
						</view>
					</uni-collapse-item>
				</uni-collapse>
			</view>
		</view>

		<view class="info_item">
			<view class="label">岗位</view>
			<view class="inp">
				<uni-easyinput v-model="job" placeholder="输入岗位名称">
				</uni-easyinput>
			</view>
		</view>

		<view class="info_item">
			<view class="label">城市</view>
			<view class="inp">
				<view class="city_list">
					<view class="city_item" v-for="item in city_list" :key="item.id" @click="selectHotCity(item.id)">
						{{item.label}}
						<view class="city_close" @click="closeCity(item.id)">X</view>
					</view>
				</view>
				<uni-easyinput v-model="city" placeholder="输入城市名称">
				</uni-easyinput>
			</view>
		</view>

		<view class="info_item">
			<view class="label"><span class="required_label">*</span>薪资</view>
			<view class="inp">
				<uni-easyinput v-model="salary" placeholder="输入薪资名称">
				</uni-easyinput>
			</view>
		</view>

		<view class="info_item" v-if="tabStatus===1">
			<view class="label">类型</view>
			<view class="inp">
				<view class="type_list">
					<view class="type_item" v-for="item in type_list" :key="item.id"
						:class="{sel_item:selType===item.id}" @click="changeSelType(item.id)">
						{{item.label}}
					</view>
				</view>
			</view>
		</view>

		<view class="info_item" v-if="tabStatus===1">
			<view class="label">学历</view>
			<view class="inp">
				<view class="sel_education" @click="education_popOpen">
					{{sel_education}}
				</view>
			</view>
		</view>

		<view class="info_item">
			<view class="label">行业</view>
			<view class="inp">
				<view class="sel_industry" @click="industry_popOpen">
					{{sel_industry}}
				</view>
			</view>
		</view>

		<view class="info_item">
			<view class="label">备注</view>
			<view class="inp">
				<uni-easyinput type="textarea" v-model="job_note" placeholder="可以填写工作的详情待遇,如福利补贴,福利待遇等">
				</uni-easyinput>
			</view>
		</view>

		<view class="info_item">
			<view class="detailTitle">
				<view class="instructions_label">说明</view>
				<icon type="info" color="grey" size="10px" @click="showDetail"></icon>
			</view>
			<view class="instructions_text">
				严禁发布不良信息，违法必究
			</view>
		</view>

		<view class="release_botton" @click="submit">点击发布</view>

		<view class="bottom_tabelbar">
			<navigator class="tabelbar_item active" url="./releaseProfessional">发布信息</navigator>
			<navigator class="tabelbar_item" url="../index/index">薪资查询</navigator>
		</view>

		<!-- TODO ui需要进行优化 -->
		<uni-popup ref="education_popup" type="bottom" background-color="#fff">
			<view class="pop_list">
				<view @click="changeEducation(item)" v-for="item in eduList" :key="item">{{item}}</view>
			</view>
		</uni-popup>

		<uni-popup ref="industry_popup" type="bottom" background-color="#fff">
			<view class="pop_list" v-if="tabStatus===1">
				<view @click="changeIndustry(item)" v-for="(item,index) in induList[0]" :key="index">{{item}}</view>
			</view>
			<view class="pop_list" v-if="tabStatus===2">
				<view @click="changeIndustry(item)" v-for="(item,index) in induList[1]" :key="index">{{item}}</view>
			</view>
		</uni-popup>

	</view>
</template>

<script>
	import {
		ref,
		reactive
	} from 'vue';
	import dropdownMenuSelection from "../utils/utils/dropdownMenuSelection.js";
	import checkStrContain from "../utils/utils/checkStrContain.js"
	import sendPostRequest from "../utils/utils/sendPostRequest.js"

	import edu_list from "./json/edu_list.json";
	import indu_list from "./json/indu_list.json";
	import company_list from "./json/company_list.json";
	import cityList from "./json/cityList.json";
	import typeList from "./json/typeList.json";

	import router from "../utils/route.js";

	export default {
		setup() {
			//切换tab
			const tabStatus = ref(1)
			const changeTab = (data) => {
				tabStatus.value = data
			}
			//公司
			const company = ref('')
			const showCollapse = ref(false);

			function openCollapse() {}

			function closeCollapse() {}
			/*
				TODO 存在问题：
					1. 当alternativeCompany数组为空时，在输入数据时不会显示提示信息（微信与h5端相同）
					2. 当alternativeCompany数组不为空时：
						a. 微信端输入公司名称时提示信息不会变化
						b. h5端输入公司名称时提示信息会变化，但是提示条的大小随着alternativeCompany初始长度而变化，且之后不会再改变。
			*/
			// const alternativeCompany = reactive(["1","2","3"]);
			// const alternativeCompany = reactive([]);
			const companyList = company_list;

			// TODO 在调用quickShowInputCompany 时，companyList会莫名奇妙出现undefined的问题。 
			const alternativeCompany = reactive(quickShowInputCompany(company.value.trim(), companyList, 3));
			// const alternativeCompany = reactive([]);
			function quickShowInputCompany(name, array, length) {
				console.log(array)
				if (array.length < 1) {
					return;
				}
				let result = [];
				for (let key in array) {
					if (checkStrContain(array[key].name, name) && result.length < length) {
						result.push(array[key])
					}
				}
				return result;
			}
			//岗位
			const job = ref('')
			//城市
			const city = ref('')
			const city_list = reactive(cityList)

			function selectHotCity(cityId) {
				for (let key in city_list) {
					if (city_list[key].id === cityId) {
						city.value = city_list[key].label;
					}
				}
			}

			function closeCity(cityId) {
				for (let key in city_list) {
					if (city_list[key].id === cityId) {
						city_list.splice(key, 1);
					}
				}
			}
			//薪资
			const salary = ref('')
			//类型
			const type_list = typeList;
			const selType = ref(1);
			const changeSelType = (data) => {
				selType.value = data
			}
			//学历
			const sel_education = ref("请选择学历")
			const education_popup = ref(null)
			const education_popOpen = () => {
				education_popup.value.open('bottom')
			}
			const eduList = reactive(edu_list);

			function changeEducation(edu) {
				dropdownMenuSelection(education_popup, sel_education, edu)
			}
			//行业
			const sel_industry = ref("请选择行业")
			const industry_popup = ref(null)
			const induList = reactive(indu_list);
			const industry_popOpen = () => {
				industry_popup.value.open('bottom')
			}

			function changeIndustry(indu) {
				dropdownMenuSelection(industry_popup, sel_industry, indu)
			}
			//待遇
			const job_note = ref('')

			//
			function showDetail() {
				uni.showModal({
					content: "严禁发布不良信息，违法必究\r\n所有数据未经允许不得盗用，侵权必究\r\n信息均为用户自愿共享发布\r\n希望大家能自觉遵守声明",
					showCancel: false,
				})
			}
			//发布
			function submit() {
				if (company.value === "" || salary.value === "") {
					uni.showModal({
						content: "请填完带*的选项",
						showCancel: false
					})
					return;
				}
				//进行提交操作
				uni.showModal({
					content: "你确定要提交吗？",
					success(res) {
						if (res.confirm) {
							let sendInformation = {
								company: company.value,
								post: job.value,
								city: city.value,//对后端输入有疑问：当自定义输入城市时如何转换为int?
								salary: parseInt(salary.value),
								type: tabStatus.value === 1 ? selType.value : 0, //0为选择新兴职业时的类型代码
								degree: sel_education.value,
								profession: sel_industry.value,
								explain: job_note.value
							}
							console.log(sendInformation);
							sendPostRequest(sendInformation.type === 0 ? route.emergingPublish :
								route.ordinaryPublish, sendInformation, {
									success() {
										uni.showModal({
											content: "提交成功！",
											showCancel: false
										})
									},
									fail() {}
								},
								true);
						} else if (res.cancel) {
							return;
						}
					}
				})
			}

			//-------
			return {
				city,
				salary,
				company,
				showCollapse,
				openCollapse,
				closeCollapse,
				alternativeCompany,
				job,
				tabStatus,
				changeTab,
				city_list,
				type_list,
				job_note,
				selType,
				changeSelType,
				education_popOpen,
				education_popup,
				sel_education,
				sel_industry,
				industry_popup,
				industry_popOpen,
				quickShowInputCompany,
				selectHotCity,
				closeCity,
				changeEducation,
				changeIndustry,
				submit,
				showDetail,
				eduList,
				induList
			}
		}
	}
</script>

<style lang="scss" scoped>
	.releaseProfessional {
		box-sizing: border-box;
		background-color: #00bf57;
		width: 100%;
		min-height: 100vh;
		padding: 20rpx;
		padding-bottom: 170rpx;

		.header {
			width: 100%;
			height: 250rpx;
			color: #fff;
			display: flex;
			flex-direction: column;
			align-items: center;

			.header_logo {
				margin-top: 25rpx;
				font-size: 60rpx;
			}

			.header_list {
				margin-top: 25rpx;
				font-size: 24rpx;
				display: flex;
				flex-direction: row;
				align-items: center;

				.header_tab {
					margin: 0 40rpx;
					box-sizing: border-box;
					padding: 20rpx 0;
				}

				.header_tab_line {
					border-bottom: 4rpx solid #fff;
					border-radius: 5%;
				}
			}
		}

		.release_botton {
			box-sizing: border-box;
			width: 100%;
			height: 100rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 35rpx;
			color: #00bf57;
			background-color: #fff;
			border-radius: 8rpx;
			margin: 40rpx auto;
		}

		.info_item {
			box-sizing: border-box;
			width: 100%;
			padding: 20rpx;
			background-color: #fff;
			border-radius: 10rpx;
			box-shadow: 0px 0px 15rpx rgba(0, 0, 0, 0.2);
			margin-bottom: 30rpx;

			.label {
				font-size: 30rpx;
				margin: 10rpx;
				color: gray;

				.required_label {
					color: red;
					margin-right: 5rpx;
				}
			}

			.inp {
				.city_list {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin: 20rpx auto;

					.city_item {
						font-size: 22rpx;
						padding: 10rpx 30rpx 10rpx 20rpx;
						border: 1rpx solid rgba(0, 0, 0, 0.1);
						border-radius: 10rpx;
						color: gray;
						position: relative;

						.city_close {
							font-size: 15rpx;
							position: absolute;
							top: 5rpx;
							right: 10rpx;
						}
					}
				}

				.type_list {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin: 20rpx auto;

					.type_item {
						margin: 0 10rpx;
						flex: 1;
						display: flex;
						justify-content: center;
						font-size: 22rpx;
						padding: 15rpx 0;
						border: 1rpx solid rgba(0, 0, 0, 0.1);
						border-radius: 10rpx;
						color: gray;
					}

					.sel_item {
						border-color: #00bf57;
						color: #00bf57;
					}
				}

				.sel_education,
				.sel_industry {
					box-sizing: border-box;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					width: 100%;
					height: 72rpx;
					background: #fff;
					color: gray;
					border: 1rpx solid #DCDFE6;
					border-radius: 8rpx;
					font-size: 28rpx;
					padding: 0 20rpx;
				}
			}

			.instructions_label {
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 40rpx;
				color: gray;
				margin: 10rpx 0;
				margin-right: 20rpx;
			}

			.instructions_text {
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 30rpx;
				color: gray;
				margin: 30rpx 0;
			}
		}

		.release_bottom {
			position: fixed;
			bottom: 0;
			left: 0;
			box-sizing: border-box;
			width: 100%;
			height: 150rpx;
			background-color: #00bf57;
			z-index: 100;
			display: flex;
			justify-content: center;
			align-items: center;

			.release_botton {
				width: 80%;
				height: 80rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 40rpx;
				color: #fff;
				border: 1px solid #fff;
				border-radius: 8rpx;
			}
		}
	}

	.detailTitle {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: baseline;

	}

	.bottom_tabelbar {
		width: 100%;
		position: fixed;
		bottom: 0;
		margin-left: -20rpx;

		.tabelbar_item {
			background-color: #eeeeee;
			display: inline-block;
			width: 50%;
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			font-family: "黑体";
		}

		.active {
			color: red;
		}
	}
</style>
