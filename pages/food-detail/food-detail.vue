<template>
	<view class="food-detail-page">
		<!-- 滚动视图容器 -->
		<scroll-view scroll-y="true" class="food-detail-container">
			<!-- 大图展示区域 -->
			<view class="image-cection">
				<!-- <image src="/static/foods/1.jpg" mode="aspectFill" class="main-image"></image> -->
				<image :src="food.image" class="main-image" mode="aspectFill"></image>
			</view>
			
			<!-- 食品信息卡片 -->
			<view class="info-card">
				<!-- 名称和价格 -->
				<view class="header">
					<text class="name">{{food.name}}</text>
					<text class="price">￥{{food.price}}</text>
				</view>
				
				<!-- 标签区域 -->
				<view class="tags">
					<view class="tag" v-for="tag in food.tags" :key="tag">
						<text>{{tag}}</text>
					</view>
					
					<!-- <view class="tag hot" v-if="food.isHot">
						<text>热销</text>
					</view> -->
					
					<view class="tag hot" v-if="food.isHot">
						<text>🔥 热销</text>
					</view>
				</view>
				
				<view class="sales">
					<text>月售{{food.sales}}份</text>
				</view>
				
				<view class="description">
					<text>{{food.description}}</text>
				</view>
			</view>
			
			<!-- 底部留白 -->
			<view class="bottom-space">
				
			</view>
		</scroll-view>
		
		<view class="action-bar">
			<!-- 底部操作区域，数量选择器 -->
			<view class="quantity-selector" v-if="foodNum !== 0">
				<view class="quantity-label">
					数量：
				</view>
				
				<view class="quantity-control">
					<view class="control-btn minus">
						<uni-icons type="minus-filled" size="52rpx" color="#ff6b35"></uni-icons>
					</view>
					
					<view class="quality">
						1
					</view>
					
					<view class="control-btn plus">
						<uni-icons type="plus-filled" size="52rpx" color="#ff6b35"></uni-icons>
					</view>
				</view>
			</view>
			
			<!-- <view class="add-btn" v-if="foodNum === 0" @click="handleAddCart">
				<text>加入购物车</text>
			</view> -->
			<!-- 同时给±按钮绑定事件 -->
			<!-- <view class="control-btn minus" @click="handleMinus">
			  <uni-icons type="minus-filled" size="52rpx" color="#ff6b35"></uni-icons>
			</view>
			<view class="quality">
			  {{ foodNum }}
			</view>
			<view class="control-btn plus" @click="handlePlus">
			  <uni-icons type="plus-filled" size="52rpx" color="#ff6b35"></uni-icons>
			</view> -->
			
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue'
	import { foodList } from '@/utils/mockData'
	import { onLoad } from '@dcloudio/uni-app'
	import { useCartStore } from '@/stores/cart'
	
	const foodNum = ref(0)
	
	const food =ref({})
	
	const cartStore = useCartStore()
	
	onLoad((options) => {
	  const id = parseInt(options.id)
	  const foundFood = foodList.find(item => item.id === id)
	  if (foundFood) {
	    food.value = foundFood
	  } else {
	    uni.showToast({
	      title: '菜品不存在',
	      icon: 'error'
	    })
	    setTimeout(() => {
	      uni.navigateBack()
	    }, 1500)
	  }
	})
	
	const handleAddCart = () => {
	  // 调用Store的添加商品方法
	  cartStore.addItem(foodList.value)
	  // 数量+1
	  foodNum.value++
	  // 可选：添加成功提示
	  uni.showToast({
	    title: '已加入购物车',
	    icon: 'success'
	  })
	}

	const handleMinus = () => {
	  if (foodNum.value > 0) {
	    foodNum.value--
	    // 可选：从购物车移除商品
	    // cartStore.removeFood(foodDetail.value.id)
	  }
	}
	
	const handlePlus = () => {
	  foodNum.value++
	  cartStore.addItem(foodList.value)
	}
	
</script>

<style lang="scss" scoped>
	.food-detail-page{
		background-color: #fff;
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
	
	.food-detail-container{
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	
	.image-cection{
		height: 500rpx;
		position: relative;
		overflow: hidden;
	}
	
	.main-image{
		width: 100%;
		height: 100%;
	}
	
	.info-card{
		background: #fff;
		border-radius: 40rpx 40rpx 0 0;
		margin-top: -40rpx;
		padding: 40rpx;
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
	}
	
	.bottom-space{
		height: 120rpx;
	}
	
	.action-bar{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: white;
		padding: 20rpx 40rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 -4rpx 20rpx rgba(0, 0, 0, 0.1);
		z-index: 100;
	}
	
	.header{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-right: 20rpx;
	}
	
	.name{
		font-size: 36rpx;
		font-weight: bold;
		color: #333;
		flex: 1;
		margin-right: 20rpx;
	}
	
	.price{
		font-size: 40rpx;
		font-weight: bold;
		color: #ff6b35;
		flex-shrink: 0;
	}
	
	.tags{
		display: flex;
		flex-wrap: wrap;
		gap: 12rpx;
		margin-bottom: 20rpx;
	}
	
	.tag{
		background: rgba(255, 107, 53, 0.1);
		color: #ff6b35;
		padding: 6rpx 16rpx;
		border-radius: 20rpx;
		font-size: 24rpx;
	}
	
	.tag.hot{
		background: rgba(255, 107, 53, 0.9);
		color: white;
	}
	
	.sales{
		font-size: 26rpx;
		color: #999;
		margin-bottom: 30rpx;
	}
	
	.description{
		font-size: 28rpx;
		color: #666;
		line-height: 1.5;
	}
	
	.quantity-selector{
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 80%;
		font-size: 36rpx;
		text-align: center;
	}
	
	.quantity-label{
		margin-right: 30rpx;
	}
	
	.quantity-control{
		display: flex;
		align-items: center;
		gap: 20rpx;
		justify-content: center;
	}
	
	.control-btn{
		transition: all 0.2s;
	}
	
	.control-btn:active{
		transform: scale(0.9);
	}
	
	.quality{
		font-size: 36rpx;
		font-weight: bold;
		color: #333;
		min-width: 60rpx;
		text-align: center;
	}
	
	.add-btn{
		width: 100%;
		height: 80rpx;
		background: #ff6b35;
		color: white;
		border-radius: 40rpx;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.add-btn:active{
		background: #e55a2b;
		transform: scale(0.98);
	}
</style>
