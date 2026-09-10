<template>
	<view class="food-card" v-if="food" @click="goToDetail">
		<!-- 左侧图片区域 -->
		<view class="food-image-container">
			<!-- 菜品图片 -->
			<image :src="food.image" mode="aspectFill" class="food-image"></image>

			<view class="hot-tag" v-if="food.isHot">
				<text>🔥 热销</text>
			</view>
		</view>

		<!-- 右侧信息区域 -->
		<view class="food-info-container">
			<view class="food-header">
				<text class="food-name">{{food.name}}</text>
			</view>

			<view class="tags-container">
				<view class="custom-tags" v-if="food.tag &&food.tags.length">
					<view class="custom-tag" :key="tag" v-for="tag in food.tags.slicec(0,2)">
						<text>{{tag}}</text>
					</view>
				</view>
			</view>

			<view class="food-sales-info">
				<text class="food-sales">月售{{food.sales}}</text>
			</view>

			<view class="price-action-container">
				<view class="price-section">
					<text class="food-price">￥{{food.price}}</text>
				</view>

				<!-- 数量控制器/添加按钮 -->
				<view class="action-section">
					<view class="quantity-control">
						<view class="control-btn minus" :disabled="quantity < 1" @click.stop="updateQuantity(-1)"
							v-if="quantity > 0">
							<uni-icons type="minus-filled" size="52rpx" color="#FF6B35"></uni-icons>
						</view>
						<text class="quantity" v-if="quantity > 0">{{ quantity }}</text>
						<view class="control-btn plus" @click.stop="updateQuantity(1)">
							<uni-icons type="plus-filled" size="52rpx" color="#FF6B35"></uni-icons>
						</view>
					</view>
				</view>
				<!-- 按钮 -->
				<!-- <view class="add-button">
						<uni-icons type="plus-filled" size="30" color="#FF6B35"></uni-icons>
					</view> -->
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		computed
	} from 'vue'
	// 导入购物车的 Pinia store（状态管理）
	import {
		useCartStore
	} from '@/stores/cart'

	// 获取购物车 store 的实例，以便调用其中的数据和方法
	const cartStore = useCartStore()

	// 定义组件接收的属性：这里接收一个名为 food 的对象，且是必需的
	const props = defineProps({
		food: {
			type: Object,
			required: true
		}
	})

	// 计算当前商品在购物车中的数量
	const quantity = computed(() => {
		// 防止 food 为空导致错误
		if (!props.food) return 0
		// 调用购物车 store 中的方法，传入 food 的 id，获取该商品的数量
		return cartStore.getItemQuantity(props.food.id)
	})

	// 添加当前商品到购物车
	const addToCart = () => {
		if (!props.food) return // 如果 food 不存在，直接退出
		cartStore.addItem(props.food) // 调用 store 的添加方法
	}

	// 修改商品数量：change 为 +1 或 -1
	const updateQuantity = (change) => {
		if (!props.food) return
		const newQuantity = quantity.value + change // 计算新数量
		if( newQuantity < 0 ) return
		if (newQuantity === 0) {
			cartStore.removeItem(props.food.id)
		}else{
			if(quantity.value === 0){
				cartStore.addItem(props.food)
			}
			cartStore.updateItemQuantity(props.food.id, newQuantity)
		}
	}

	// 跳转到菜品详情页面
	const goToDetail = () => {
		// uni.navigateTo 是 uni-app 的页面跳转 API
		uni.navigateTo({
			url: `/pages/food-detail/food-detail?id=${props.food.id}`
		})
	}
</script>

<style lang="scss" scoped>
	.food-card {
		background-color: white;
		border-radius: 16rpx;
		box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.08);
		margin-bottom: 16rpx;
		display: flex;
		padding: 16rpx;
		align-items: stretch;
		min-height: 180rpx;
	}

	.food-image-container {
		position: relative;
		width: 180rpx;
		height: 180rpx;
		border-radius: 12rpx;
		overflow: hidden;
		flex-shrink: 0;
		margin-right: 20rpx;
	}

	.food-image {
		width: 100%;
		height: 100%;
	}

	.food-info-container {
		flex: 1;
		display: flex;
		flex-direction: column;
		min-width: 0;
	}

	.food-name {
		display: block;
		font-size: 30rpx;
		font-weight: 600;
		color: #333;
		line-height: 1.3;
	}

	.tags-container {
		min-height: 50rpx;
		margin-bottom: 8rpx;
		display: flex;
		align-items: flex-start;
	}

	.food-sales-info {
		margin-bottom: 12rpx;
		height: 30rpx;
		display: flex;
		align-items: center;
	}

	.food-sales {
		font-size: 22rpx;
		color: #999;
	}

	.price-action-container {
		margin-top: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-height: 52rpx;
	}

	.price-section {
		.food-price {
			font-size: 36rpx;
			font-weight: bold;
			color: #ff6b35;
		}
	}

	.action-section {
		display: flex;
		align-items: center;
	}

	.custom-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6rpx;
		align-items: center;
		padding-top: 8rpx;
	}

	.custom-tag {
		background: rgba(255, 107, 53, 0.1);
		color: #ff6b35;
		padding: 4rpx 10rpx;
		border-radius: 8rpx;
		font-size: 20rpx;
		font-weight: 500;
		border: 1rpx solid rgba(255, 107, 53, 0.2);
		height: 32rpx;
		line-height: 24rpx;
		display: flex;
		align-items: center;
	}

	.add-button {
		width: 52rpx;
		height: 52rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		transition: all 0.2s;
	}

	.add-button:active {
		transform: scale(0.9);
		background: rgba(255, 107, 53, 0.2);
	}

	.hot-tag {
		position: absolute;
		top: 8rpx;
		left: 8rpx;
		background: rgba(255, 107, 53, 0.9);
		color: white;
		padding: 4rpx 10rpx;
		border-radius: 12rpx;
		font-size: 18rpx;
		font-weight: 500;
		z-index: 2;
	}
	
	/* 数量控制器 */
	.quantity-control {
	  display: flex;
	  align-items: center;
	  gap: 8rpx;
	  
	  .control-btn {
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    padding: 0;
	    
	    &.minus {
	      color: #f5f5f5;
	    }
	    
	    &.plus {
	      color: #FF6B35;
	    }
	  }
	  
	  .quantity {
	    font-size: 26rpx;
	    font-weight: 600;
	    color: #333;
	    min-width: 30rpx;
	    text-align: center;
	  }
	}

</style>