<template>
	<view class="professionDetail">
		<view class="top_list">
			<view class="pos_name">{{data.pos_name}}</view>
			<view class="salary">{{data.pos_salary}}/月</view>
		</view>
		<view class="center_pos_list">
			<view class="address">{{data.com_address}}</view>
			<view class="education">{{data.education}}</view>
			<view class="pos_type">{{data.pos_type}}</view>
		</view>
		<view class="center_com_list">
			<view class="com_left">
				<view class="com_name">{{data.com_name}}</view>
			</view>
			<view class="com_right">
				<view class="center_time_list">
					<view class="address">发布时间：{{data.release_time}}</view>
				</view>
				<view class="center_more_list">
					<view class="read_count">浏览量：{{1}}</view>
					<view class="praise_count">点赞量：{{data.quantity}}</view>
				</view>
			</view>
		</view>
		
		<view class="remark">
			备注
		</view>
		<view class="comments">
			评论
		</view>
		<view class="advertising">
			广告
		</view>
	</view>
</template>

<script>
import {ref,reactive} from 'vue'
export default {
	components:{
	},
	// TODO 在h5端调试时，options为传递过来的对象，而在微信小程序中为 Proxy{}。
	setup(options){
		console.log(options)
		const data=reactive(options);
		console.log(data)
		return {
			data
		}
	}
}
</script>

<style scoped lang="scss">
.professionDetail{
	box-sizing: border-box;
	width: 100vw;
	min-height: 100vh;
	padding: 10px 20px;
	.top_list{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 15rpx;
		.pos_name{
			font-size: 40rpx;
		}
		.salary{
			font-size: 48rpx;
			color: #00bf57;
		}
		.center_more_list{
			font-size: 48rpx;
			color: #00bf57;
		}
	}
	.center_pos_list{
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
		color: gray;
		margin-top: 20rpx;
	}
	.center_com_list{
		display: flex;
		justify-content: space-between;
		align-items: center;
		.com_left{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			.com_name{
				font-size: 38rpx;
			}
		}
		.com_right{
			// display: flex;
			// justify-content: flex-start;
			// align-items: center;
			.center_more_list,.center_time_list{
				display: flex;
				justify-content: flex-end;
				font-size: 24rpx;
				color: gray;
				margin-top: 20rpx;
				.read_count{
					margin-right: 30rpx;
				}
			}
		}
	}
	.remark{
		box-sizing: border-box;
		width: 100%;
		padding: 100rpx;
		border: 1rpx solid gray;
		text-align: center;
		margin-top: 20rpx;
	}
	.comments{
		box-sizing: border-box;
		width: 100%;
		padding: 100rpx;
		border: 1rpx solid gray;
		text-align: center;
		margin-top: 20rpx;
	}
	.advertising{
		box-sizing: border-box;
		width: 100%;
		padding: 100rpx;
		border: 1rpx solid gray;
		text-align: center;
		margin-top: 20rpx;
	}
}
</style>
<style lang="scss">
// .professionDetail{}  
</style>

