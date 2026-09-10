<template>
  <view 
    v-if="totalCount > 0"
    class="cart-bar"
  >
    <!-- 左侧区域 -->
    <view class="cart-left" @tap="handleClick">
      <view class="cart-icon">
        <uni-icons type="cart" size="24" color="white"></uni-icons>
        <view class="cart-badge">
          <text>{{ totalCount > 99 ? '99+' : totalCount }}</text>
        </view>
      </view>
      
      <view class="cart-info">
        <text class="total-label">购物车</text>
        <text class="total-price">¥{{ totalPrice }}</text>
      </view>
    </view>
    
    <!-- 结算按钮 -->
    <view class="cart-action" @tap="handleClick">
      <text class="action-text">去结算</text>
      <uni-icons type="arrowright" size="16" color="white"></uni-icons>
    </view>
  </view>
</template>

<script setup>
	import { computed } from 'vue';
	import { useCartStore } from '../../stores/cart';
	
	const cartStore = useCartStore()
	
	const totalCount = computed(()=> cartStore.totalCount)
	const totalPrice = computed(()=> cartStore.totalPrice)
	
	const handleClick = () => {
		uni.switchTab({
			url:'/pages/cart/cart',
			success: () => {
				cartStore.setOrderMode(true)
			},
			fail: (err) => {
				console.log('跳转失败',err)
				uni.navigateTo({
					url:'/pages/cart/cart'
				})
			}
		})
	}
</script>

<style lang="scss" scoped>
.cart-bar {
  position: fixed;
  bottom: 100rpx;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 700rpx;
  background: rgba(51, 51, 51, 0.95);
  backdrop-filter: blur(20rpx);
  border-radius: 50rpx;
  padding: 20rpx 30rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 8rpx 40rpx rgba(0, 0, 0, 0.2);
  z-index: 100;
  
  .cart-left {
    flex: 1;
    display: flex;
    align-items: center;
  }
  
  .cart-icon {
    position: relative;
    width: 60rpx;
    height: 60rpx;
    background: linear-gradient(135deg, #FF6B35, #FF9D00);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .cart-badge {
      position: absolute;
      top: -10rpx;
      right: -10rpx;
      min-width: 36rpx;
      height: 36rpx;
      background: #FF4D4F;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22rpx;
      font-weight: bold;
      padding: 0 4rpx;
    }
  }
  
  .cart-info {
    flex: 1;
    margin-left: 20rpx;
    color: white;
    
    .total-label {
      display: block;
      font-size: 26rpx;
      opacity: 0.9;
      margin-bottom: 4rpx;
    }
    
    .total-price {
      display: block;
      font-size: 36rpx;
      font-weight: bold;
    }
  }
  
  .cart-action {
    background: linear-gradient(135deg, #FF6B35, #FF9D00);
    padding: 15rpx 30rpx;
    border-radius: 40rpx;
    display: flex;
    align-items: center;
    gap: 8rpx;
    
    .action-text {
      font-size: 28rpx;
      font-weight: 500;
      color: white;
    }
  }
}
</style>

