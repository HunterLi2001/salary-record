<template>
	<view class="professionPage">
		<view class="header">
				<view class="header_logo">普通职业</view>			
		</view>
		<view class="content_search">
				<uni-easyinput v-model="sendInformation.information" placeholder="请输入公司名称/城市/岗位" @iconClick="search()" prefixIcon="search"></uni-easyinput>
		</view>
		<view class="content_more">
			<view class="more_list">
				<view class="label">类型</view>
				<view class="list_scroll">
					<view class="sel_list">
						<view class="sel_item" v-for="item in typeList.data" :key="item.id" @click="chooseType(item.id)">{{item.name}}</view>
						<view class="sel_item" @click="open">更多</view>
					</view>
				</view>
			</view>
			<view class="more_list">
				<view class="label">城市</view>
				<view class="list_scroll">
					<view class="sel_list">
						<view class="sel_item"
						v-for="item in cityList.data" :key="item.id" @click="chooseCity(item.id)">{{item.name}}</view>
						<view class="sel_item" @click="open">更多</view>
					</view>
				</view>
			</view>
			<view class="more_list">
				<view class="label">行业</view>
				<view class="list_scroll">
					<view class="sel_list">
						<view class="sel_item" v-for="item in jobList.data" :key="item.id" @click="chooseJob(item.id)">{{item.name}}</view>
						<view class="sel_item" @click="open">更多</view>
					</view>
				</view>
			</view>
			<view class="more_line"></view>
			<view class="content_table">
				<view class="table_sel_list">
					<view class="sel_item" :class="{seled_item:tabTarget===1}" @click="changeTabTarget(1)">按时间排序</view>
					<view class="sel_item" :class="{seled_item:tabTarget===2}" @click="changeTabTarget(2)">按点赞数排序</view>
					<view class="sel_item" :class="{seled_item:tabTarget===3}" @click="changeTabTarget(3)">按可信度排序</view>
				</view>
				<view v-for="item in detail" :key="item"  class="searchItem">
					<searchItem :detail="item"></searchItem>
				</view>
			</view>
		</view>
		<!-- <view>
			<uni-indexed-list :options="popList" :showSelect="true"/>
		</view> -->
		<uni-popup ref="popup" type="bottom" background-color="#fff">
			<view class="pop_list">
				<view>
					<uni-collapse>
					    <uni-collapse-item title-border="none" :border="false" :show-arrow="false" :open="showCollapse">
					        <template v-slot:title>
					            <uni-easyinput 
								v-model="value" 
								placeholder="请输入公司名称/城市/岗位" 
								@blur="closeCollapse"
								@focus="openCollapse"
								prefixIcon="search"></uni-easyinput>
					        </template>
					        <view class="content">
					            <view class="text">联想1</view>
								<view class="text">联想2</view>
								<view class="text">联想3</view>
					        </view>
					    </uni-collapse-item>
					</uni-collapse>
				</view>
				<view style="height: 400rpx;">
					<uni-indexed-list :options="popList" :showSelect="true"/>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import {ref,reactive,toRaw} from 'vue'
import searchItem from "../../common/searchItem.vue"
import pop_list from "../../../../static/json/pop_list.json";
import {sendRequest} from "../../../utils/utils.js"
import router from "../../../utils/route.js";
export default {
	components:{
		searchItem
	},
	// TODO 在加载页面时开始搜索操作，同时将传递来的参数放入sendInformation.information中进行显示.
	onLoad(options) {
		console.log(1)
	},
	setup(){
		//tab 切换
		const tabStatus = ref(1)//1-按时间排序 2-按点赞数排序 3-按可信度排序
		const changeTab =(target)=>{
			tabStatus.value=target
		}
		//发送信息对象
		// TODO 要发送的信息貌似不匹配（dSalary和hSalary没有对应的入口）
		const sendInformation = reactive({
			information:"",
			city:0,
			// dSalary:???,
			// hSalary:???,
			order:tabStatus.value,
			currentPage:1,
			pageSize:10
		})
		//筛选
		const showCollapse = ref(false)
		const closeCollapse = ()=>{
			showCollapse.value=false
			console.log(showCollapse.value)
		}
		const openCollapse = ()=>{
			showCollapse.value=true
			console.log(showCollapse.value)
		}
		//热门
		const showList = ref(true)
		const changeList =()=>{
			showList.value=!showList.value
		}
		function chooseType(typeId){
			console.log(typeId)
		}
		function chooseCity(cityId){
			// TODO 对选择的选项进行高亮
			sendInformation.city=cityId;
			// for(let key in ci)
		}
		function chooseJob(JobId){
			console.log(jobId);
		}
		
		const typeList = reactive({
			data:[
			{
				id:1,
				name:"实习"
			},
			{
				id:2,
				name:"校招"
			},
			{
				id:3,
				name:"社招"
			}
		]
		})
		const cityList = reactive({
			data:[
			{
				id:1,
				name:"重庆"
			},
			{
				id:2,
				name:"北京"
			},
			{
				id:3,
				name:"上海"
			}
		]
		})
		const jobList = reactive({
			data:[
			{
				id:1,
				name:"金融"
			},
			{
				id:2,
				name:"IT"
			},
			{
				id:3,
				name:"教育"
			}
		]
		})
		//搜索操作
		function search(){
			if(sendInformation.information==="")return;
			console.log("searching!",toRaw(sendInformation));
			// TODO 跨域了
			uni.request({
				url:"http://203.56.169.102:8084"+router.getActicleList,
				method:"POST",
				data:toRaw(sendInformation),
				fail(error){
					uni.showModal({
						content:"搜索失败!错误代码为:"+error.errMsg,
						showCancel:false,
					})
					return;
				},
				success(data) {
					console.log(data);
					// TODO　将返回的数据保存到detail中
				}
			})
		}
		
		//搜索结果筛选
		const tabTarget = ref(1)
		const changeTabTarget = (target)=>{
			tabTarget.value=target;
		}
		const detail =reactive([{
			com_name:'腾讯',
			com_address:"重庆市南岸区",
			pos_name:"开发工程师",
			pos_salary:100000,
			credibility:'高',
			quantity:1000,
			release_time:'2010-10-10'
		},{
			com_name:'字节跳动',
			com_address:"重庆市渝北区",
			pos_name:"前端工程师",
			pos_salary:233333,
			credibility:'不高不低',
			quantity:6666,
			release_time:'2077-1-2'
		}]);
		const popup=ref(null)
		const open=()=>{
			console.log(popup)
			popup.value.open('bottom')
		}
		const popList=pop_list;
		return {
			sendInformation,
			popList,
			open,
			popup,
			detail,
			tabStatus,
			changeList,
			chooseType,
			chooseCity,
			chooseJob,
			showList,
			typeList,
			cityList,
			jobList,
			changeTab,
			showCollapse,
			closeCollapse,
			openCollapse,
			tabTarget,
			changeTabTarget,
			search
		}
	}
}
</script>

<style scoped lang="scss">
.professionPage{
	box-sizing: border-box;
	background-color: #00bf57;
	width: 100%;
	min-height: 100vh;
	padding: 20rpx;
	.header{
		width: 100%;
		height: 250rpx;
		color: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
		.header_logo{
			margin-top: 25rpx;
			font-size: 60rpx;
		}
		.header_list{
			margin-top: 25rpx;
			font-size: 24rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			.header_tab{
				margin: 0 40rpx;
				box-sizing: border-box;
				padding: 20rpx 0;
			}
			.header_tab_line{
				border-bottom: 4rpx solid #fff;
				border-radius: 5%;
			}
		}
	}
	.content_search{
		border-radius: 8rpx;
		overflow: hidden;
		margin-bottom: 10px;
	}
	.content_more{
		box-sizing: border-box;
		width: 100%;
		padding: 20rpx;
		// height: 400rpx;
		border-radius: 10rpx;
		box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
		background-color: #fff;
		margin-bottom: 10px;
		.more_list{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
			margin-top: 15rpx;
			overflow: scroll;
			.label{
				margin-left:15rpx;
				font-size: 24rpx;
				color:gray;
			}
			.list_scroll{
				width: 100%;
				box-sizing: border-box;
				overflow-x:scroll ;
				.sel_list{
					margin-top: 10rpx;
					display: flex;
					flex-direction: row;
					align-items: center;
					.sel_item{
						flex-shrink: 0;
						width: 100rpx;
						text-align: center;
						padding: 10rpx;
						border: 1rpx solid #00bf57;
						color: #00bf57;
						border-radius: 20rpx;
						margin-right:10rpx;
					}
				}
			}
			.list_scroll::-webkit-scrollbar{
				display: none;
			}
		}
		.more_line{
			margin-top: 20rpx;
			border: 1px solid rgba(0, 0, 0, 0.06);
			border-radius: 10%;
		}
		.content_table{
			.table_sel_list{
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 40rpx;
				.sel_item{
					padding: 10rpx 0;
					margin: 0 20rpx;
					font-size: 28rpx;
					color: gray;
				}
				.seled_item{
					color: #00bf57;
					border-bottom: 2rpx solid #00bf57;
				}
			}
			.searchItem{
				margin: 20rpx 0;
			}
		}
		
	}
	.pop_list{
		height: 800rpx;
	}
}
</style>
<style lang="scss">
	.professionPage{
		.content_search{
			.is-input-border.data-v-abe12412 {
				background-color: #fff;
			}
		}
	.uni-indexed-list.data-v-0f58ddf9{
		top: auto;
		height: 400rpx;
	}
	}
</style>

