<template>
	<view class="professionPage">
		<view class="header">
			<view class="header_logo">logo</view>
			<view class="header_list">
				<!-- 1-普通职业 2-新兴职业 -->
				<view class="header_tab" :class="{header_tab_line:tabStatus===1}" @click="changeTab(1)">普通职业</view>
				<view class="header_tab" :class="{header_tab_line:tabStatus===2}" @click="changeTab(2)">新兴职业</view>
			</view>
		</view>
		<view class="content_search" v-if="tabStatus===2">
			<uni-collapse>
				<uni-collapse-item title-border="none" :border="false" :show-arrow="false" :open="showCollapse">
					<template v-slot:title>
						<view class="newJobDetail" @blur="closeCollapse" @focus="openCollapse">点击查看更多新兴岗位</view>
					</template>
					<view class="content">
						<view class="innerContent">
							<view class="detail">外卖</view>
							<view class="detail">主播</view>
							<view class="detail" style="margin-right: 0;">代驾</view>
						</view>
						<view class="innerContent">
							<view class="detail">网约车</view>
							<view class="detail">快递</view>
							<view class="detail" style="margin-right: 0;">地摊</view>
						</view>
						<view class="point">. . . . . .</view>
						<view class="underpoint">非固定性职业</view>
						<view class="tip">以上职业仅在该小程序中指新兴职业</view>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</view>
		<view class="content_search">
			<uni-easyinput v-model="inputValue" placeholder="请输入公司名称/城市/岗位" @iconClick="search" prefixIcon="search">
			</uni-easyinput>
		</view>
		<view class="content_more">
			<view class="more_title">
				<view class="more_label">热门搜索</view>
				<!-- <view class="more_hidden" @click="changeList">X</view> -->
			</view>
			<view class="more_list" v-if="showList">
				<view class="more_list_item" v-for="item in tabStatus===1?ordinaryList.data:emergingList.data"
					:key="item.id" @click="selectHotOptions(item.id)">
					{{item.name}}
				</view>
				<view class="fill_item" v-for="n in 20" :key="n"></view>
			</view>

		</view>
		<!-- <view class="content_table">
				<uni-easyinput v-model="value" placeholder="请输入内容"></uni-easyinput>
		</view>
		<Emerging></Emerging>
		<Ordinary></Ordinary> -->
	</view>
</template>

<script>
	import {
		ref,
		reactive,
		toRaw
	} from 'vue';

	import ordinary_list from "./json/ordinary_list.json";
	import emerging_list from "./json/emerging_list.json";

	export default {
		props: {
			target: String
		},
		setup(props) {
			//tab 切换
			console.log(props, props.target)
			const tabStatus = ref(parseInt(props.target))
			const changeTab = (target) => {
				tabStatus.value = target;
				loadingList();
			}
			//筛选
			const showCollapse = ref(false)
			const closeCollapse = () => {
				showCollapse.value = false
				console.log(showCollapse.value)
			}
			const openCollapse = () => {
				showCollapse.value = true
				console.log(showCollapse.value)
			}
			//输入框显示
			const inputValue = ref("");
			//热门
			const showList = ref(true)
			const changeList = () => {
				showList.value = !showList.value
			}

			function selectHotOptions(list) {
				loadingList();
				for (let key in toRaw(moreList.value)) {
					if (moreList.value[key].id === list) {
						search(moreList.value[key].name);
					}
				}
			}
			const moreList = reactive({});
			const ordinaryList = reactive(ordinary_list);
			const emergingList = reactive(emerging_list);

			function loadingList() {
				moreList.value = tabStatus.value === 1 ? toRaw(ordinaryList.data) : toRaw(emergingList.data);
			}
			const search = (value) => {
				console.log(value)
				uni.navigateTo({
					url: (tabStatus.value === 1 ? "../searchDetail/Ordinary/ordinary" :
							"../searchDetail/Emerging/Emerging") + "?tabStatus=" + tabStatus.value +
						"&inputValue=" + (value === "prefix" ? inputValue.value : value)
				})
			}
			return {
				loadingList,
				inputValue,
				search,
				selectHotOptions,
				tabStatus,
				changeList,
				showList,
				moreList,
				ordinaryList,
				emergingList,
				changeTab,
				showCollapse,
				closeCollapse,
				openCollapse
			}
		}
	}
</script>

<style scoped lang="scss">
	.professionPage {
		box-sizing: border-box;
		background-color: #00bf57;
		width: 100%;
		min-height: 100vh;
		padding: 20rpx;

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

		.content_search {
			border-radius: 8rpx;
			overflow: hidden;
			margin-bottom: 10px;

			.content {
				padding: 40rpx;

				.tip {
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					color: blue;
				}

				.innerContent {
					font-size: 50rpx;
					display: flex;
					justify-content: center;
					flex-wrap: wrap;

					.detail {
						margin-right: 50rpx;
					}
				}

				.point {
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					font-size: 75rpx;
				}

				.underpoint {
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					font-size: 35rpx;
				}
			}
		}

		.content_more {
			box-sizing: border-box;
			width: 100%;
			padding: 20rpx;
			// height: 400rpx;
			border-radius: 10rpx;
			box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
			background-color: #fff;
			margin-bottom: 10px;

			.more_title {
				display: flex;
				justify-content: space-between;
				width: 100%;

				.more_label {
					font-size: 22rpx;
					color: gray;
				}

				.more_hidden {
					font-size: 22rpx;
					color: gray;
				}
			}

			.more_list {
				margin-top: 20rpx;
				display: flex;
				justify-content: space-between;
				width: 100%;
				flex-wrap: wrap;

				.more_list_item {
					padding: 15rpx;
					margin: 10rpx 20rpx;
					border: 1rpx solid #00bf57;
					color: #00bf57;
					border-radius: 10rpx;
				}

				.fill_item {
					height: 0;
					margin: 10rpx 20rpx;
					visibility: hidden;
				}
			}
		}

		.content_table {
			box-sizing: border-box;
			width: 100%;
			padding: 10rpx;
			height: 800rpx;
			border-radius: 10rpx;
			box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
			background-color: #fff;
		}

		.newJobDetail {
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			color: #7f7f7f;
		}
	}
</style>
<style lang="scss">
	.professionPage {
		.content_search {
			.is-input-border.data-v-abe12412 {
				background-color: #fff;
			}
		}
	}
</style>
