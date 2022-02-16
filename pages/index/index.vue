<template>
	<view class="indexPage">
		<view class="header">
			<view class="headLogo">SALARY SHOW</view>
			<view class="headselect">
				<view @click="enter">薪资查询</view>
				<view @click="enterProfessional(0)">普通职业</view>
				<view @click="enterProfessional(1)">新兴职业</view>
			</view>
		</view>
		<view class="content">
			
		</view>
		<view class="footer"></view>
	</view>
</template>

<script>
	import {ref} from 'vue'
	export default {
		onShareAppMessage(res) {
		    if (res.from === 'button') {// 来自页面内分享按钮
		      console.log(res.target)
		    }
		    return {
		      title: '自定义分享标题',
		      path: '/pages/test/test?id=123'
		    }
		  },
		setup(){
			const enterProfessional=(target)=>{
				uni.navigateTo({
				    url: `../Professional/Professional/Professional?target=${target}`
				});
			}
			
			return {
				enterProfessional
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
