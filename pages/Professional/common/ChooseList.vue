<template>
	<view class="more_list">
		<view class="label">{{label}}</view>
		<view class="list_scroll">
			<view class="sel_list">
				<view class="sel_item" :class="item.active" v-for="item in typeList.data" :key="item.id"
					@click="chooseType(item.id)">{{item.name}}</view>
					<!-- TODO 更多内容没有做 -->
				<view class="sel_item" @click="open">更多</view>
			</view>
		</view>
	</view>
</template>

<script>
	props:{
		label:String,
		typeList:Proxy,
		todo:Function,
		more:Function
	}
	export default{
		setup(){
			
		}
	}
</script>

<style>
</style>
