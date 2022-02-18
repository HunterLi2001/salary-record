<template>
	<view class="search_card_item">
		<view class="item_label">
			<view class="com_name">{{imformation.com_name}}</view>
			<view class="com_address">{{imformation.com_address}}</view>
		</view>
		<view class="item_content">
			<view class="pos_name">{{imformation.pos_name}}</view>
			<view class="pos_salary">
				<span class="num">{{imformation.pos_salary}}</span>
				<span class="unit">/月</span>
			</view>
		</view>
		<view class="item_more">
			<view class="item_more_left">
				<view class="more_item">可信度:{{imformation.credibility}}</view>
				<view class="more_item">点赞量:{{imformation.quantity}}</view>
				<view class="more_item">发布时间:{{imformation.release_time}}</view>
			</view>
			<view class="enterDetail"  @click='enterDetail'>查看详情 ></view>
		</view>
	</view>
</template>

<script>
	import {reactive} from "vue";
	export default {
		props:{
			detail:Object,
		},
		setup(props){
			const imformation = reactive({
				com_name:props.detail.com_name,
				com_address:props.detail.com_address,
				pos_name:props.detail.pos_name,
				pos_salary:props.detail.pos_salary,
				credibility:props.detail.credibility,
				quantity:props.detail.quantity,
				release_time:props.detail.release_time
			});
			//查看详情
			const enterDetail=()=>{
				uni.navigateTo({
					url:`/pages/Professional/professionalDetail/professionalDetail?`
					+`com_name=${imformation.com_name}&com_address=${imformation.com_address}&pos_name=${imformation.pos_name}&pos_salary=${imformation.pos_salary}&credibility=${imformation.credibility}&quantity=${imformation.quantity}&release_time=${imformation.release_time}`
				})
			}
			return{
				enterDetail,
				imformation
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search_card_item{
		box-sizing: border-box;
		width: 100%;
		padding: 20rpx;
		border: 1rpx solid transparent;
		border-radius: 30rpx;
		box-shadow: 0px 0px 15rpx rgba(0, 0, 0, 0.2);
		.item_label{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			.com_name,.com_address{
				font-size: 20rpx;
				margin-right: 10rpx;
				color: gray;
			}
		}
		.item_content{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 15rpx 10rpx;
			font-size: 38rpx;
			.pos_name{
				color: rgba(0,0,0,0.7);
			}
			.pos_salary{
				.num{
					color: #00bf57;
				}
				.unit{
					font-size: 24rpx;
					color: gray;
				}
			}
		}
		.item_more{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.item_more_left{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				font-size: 18rpx;
				color: gray;
				.more_item{
					margin-right: 15rpx;
				}
			}
			.enterDetail{
				color: rgba(0,0,0,0.7);
				font-size: 25rpx;
			}
		}
	}
</style>
