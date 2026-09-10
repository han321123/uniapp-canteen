<template>
	<view class="cart-page">
		<!-- 顶部标题区 -->
		<view class="header-section">
			<text class="page-title">{{cartStore.totalCount > 0? '订单确认':'购物车'}}</text>
			<text class="clean-btn" @click="clearCart" v-if="cartStore.totalCount > 0">清空</text>
		</view>
		
		<!-- 空状态 -->
		<view v-if="cartStore.totalCount===0" class="empty">
			<text>🛒 购物车是空的</text>
			<view @click="uni.switchTab({url:'/pages/menu/menu'})" class="empty-btn">点餐</view>
		</view>

		<!-- 商品列表区域 -->
		<scroll-view class="product-list" scroll-y="true">
			<view v-for="item in cartStore.items" :key="item.id" class="product-item">
				<image class="product-image" :src="item.image" mode="aspectFill" />
				<view class="product-info">
					<view class="product-header">
						<text class="product-name">{{ item.name }}</text>
						<view class="delete-btn" @click="removeItem(item.id)">
							<uni-icons type="trash-filled" size="28" color="#FF6B35"></uni-icons>
						</view>
					</view>
					<view class="product-footer">
						<text class="product-price">¥{{ item.price }}</text>
						<view class="quantity-control">
							<uni-icons class="control-btn minus" type="minus" size="28" color="#FF6B35"
								@click="updateQty(item.id, -1)"></uni-icons>
							<text class="quantity">{{ item.quantity }}</text>
							<uni-icons class="control-btn plus" type="plus" size="28" color="#FF6B35"
								@click="updateQty(item.id, 1)"></uni-icons>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>


		<!-- 底部结算栏 -->
		<view class="checked-section" v-if="cartStore.totalCount > 0">
			<!-- 配送方式选择、表单、结算信息 -->
			<view class="delivery-options">
				<radio-group @change="healeDeliveryChange" class="delivery-group">
					<label class="delivery-option">
						<radio value="dinein" :checked="cartStore.deliveryType === 'dinein'" color="#ff6b35"><text
								class="option-text">堂食</text></radio>
					</label>
					<label class="delivery-option">
						<radio value="takeaway" :checked="cartStore.deliveryType === 'takeaway'" color="#ff6b35"><text
								class="option-text">外卖</text></radio>
					</label>
				</radio-group>
			</view>

			<view class="delivery-form" v-if="cartStore.deliveryType === 'takeaway'">
				<view class="form-item">
					<text class="form-label">地址：</text>
					<input class="form-input" placeholder="请输入寄送地址" v-model="deliveryAddress"/>
				</view>
				<view class="form-item">
					<text class="form-label">收件人：</text>
					<input class="form-input" placeholder="请输入收件人姓名" v-model="deliveryName"/>
				</view>
				<view class="form-item">
					<text class="form-label">联系方式：</text>
					<input class="form-input" placeholder="请输入联系方式" v-model="deliveryPhone"/>
				</view>
			</view>

			<view class="checkout-info">
				<view class="price-info">
					<text class="total-label">合计：</text>
					<text class="total-price">￥{{cartStore.totalPrice}}</text>
					<text class="item-count">{{cartStore.totalCount}}件</text>
				</view>
				<view class="checked-btn" @click="handleCheckout">
					<text>去结算</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue'
	import { useCartStore } from '@/stores/cart'

	const cartStore = useCartStore()

	const deliveryAddress = ref('')
	const deliveryName = ref('')
	const deliveryPhone = ref('')

	// 更新商品数量：根据 change（+1 或 -1）调整指定 id 的商品数量
	const updateQty = (id, change) => {
		const item = cartStore.items.find(i => i.id === id)
		if (item) {
			const newQty = item.quantity + change
			if (newQty > 0) {
				cartStore.updateItemQuantity(id, newQty)
			} else {
				cartStore.removeItem(id) // 数量 ≤0 时移除商品
			}
		}
	}

	// 从购物车移除指定商品
	const removeItem = (id) => {
		cartStore.removeItem(id)
	}

	const clearCart = () => {
		uni.showModal({
			title: '提示',
			content: '确定清空购物车吗？',
			success: (res) => {
				if (res.confirm) {
					cartStore.clearCart()
				}
			}
		})
	}


	const healeDeliveryChange = (e) => {
		cartStore.setDeliveryType(e.detail.value)
	}
	
	const handleCheckout = () => {
	  if (cartStore.orderMode) {
	    // 订单确认模式：校验外卖信息
	    if (cartStore.deliveryType === 'takeaway') {
	      if (!deliveryAddress.value.trim()) {
	        uni.showToast({ title: '请输入地址', icon: 'none' })
	        return
	      }
	      if (!deliveryName.value.trim()) {
	        uni.showToast({ title: '请输入收件人姓名', icon: 'none' })
	        return
	      }
	      if (!deliveryPhone.value.trim()) {
	        uni.showToast({ title: '请输入联系电话', icon: 'none' })
	        return
	      }
	      // if (!/^1[3-9]\d{9}$/.test(deliveryPhone.value.trim())) {
	      //   uni.showToast({ title: '手机号格式不正确', icon: 'none' })
	      //   return
	      // }
	    }
	    // 模拟支付
	    uni.showModal({
	      title: '确认支付',
	      content: `确认支付 ¥${cartStore.totalPrice.toFixed(2)} 吗？`,
	      success: (res) => {
	        if (res.confirm) {
	          uni.showToast({ title: '支付成功', icon: 'success' })
	          cartStore.clearCart()
	          cartStore.setOrderMode(false)
	          setTimeout(() => {
	            uni.switchTab({ url: '/pages/menu/menu' })
	          }, 1500)
	        }
	      }
	    })
	  } else {
	    // 购物车模式：进入订单确认模式
	    if (cartStore.items.length > 0) {
	      cartStore.setOrderMode(true)
	    } else {
	      uni.showToast({ title: '购物车是空的', icon: 'none' })
	    }
	  }
	}

</script>

<style lang="scss" scoped>
	.cart-page {
		height: 100vh;
		display: flex;
		flex-direction: column;
		background-color: #f8f8f8;
	}

	.header-section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 40rpx 30rpx 20rpx;
	}

	.page-title {
		font-size: 40rpx;
		font-weight: bold;
		color: #333;
	}

	.clean-btn {
		font-size: 28rpx;
		color: #ff6b35;
	}

	.product-list {
		flex: 1;
		padding: 20rpx;
		box-sizing: border-box;
		min-height: 0;
		padding-bottom: 400rpx;
	}

	.checked-section {
		background-color: white;
		display: flex;
		flex-direction: column;
		border-top: 2rpx solid #f5f5f5;
		padding: 20rpx;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.product-item {
		display: flex;
		background-color: white;
		padding: 20rpx;
		border-radius: 16rpx;
		margin-bottom: 20rpx;
	}

	.product-image {
		width: 150rpx;
		height: 150rpx;
		border-radius: 12rpx;
		margin-right: 20rpx;
	}

	.product-info {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-sizing: border-box;
	}

	.product-header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.product-name {
		font-size: 32rpx;
		font-weight: 600;
		max-width: 300rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.delete-btn {
		transition: all 0.2s;
	}

	.delete-btn:active {
		transform: scale(0.9);
	}

	.product-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.product-price {
		color: #ff6b35;
		font-size: 36rpx;
		font-weight: bold;
	}

	.quantity-control {
		display: flex;
		align-items: center;
		gap: 20rpx;
	}

	.control-btn {
		width: 50rpx;
		height: 50rpx;
		border-radius: 50%;
		background: white;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s;
	}

	.control-btn:active {
		transform: scale(0.9);
	}

	.quantity {
		min-width: 60rpx;
		text-align: center;
		font-size: 28rpx;
		font-weight: 600;
	}

	.delivery-options {
		padding: 20rpx 30rpx;
		border-bottom: 2rpx solid #f5f5f5;
	}

	.delivery-group {
		display: flex;
		justify-content: space-around;
		gap: 50rpx;
	}

	.delivery-option {
		display: flex;
		align-items: center;
		gap: 15rpx;
	}

	.option-text {
		font-size: 32rpx;
		font-weight: bold;
		color: #ff6b35;
	}

	.delivery-form {
		width: 90%;
		display: flex;
		flex-direction: column;
		padding: 20rpx 30rpx;
	}

	.form-item {
		width: 100%;
		display: flex;
		align-items: center;
		margin-bottom: 20rpx;
	}

	.form-label {
		font-weight: bold;
		color: #ff6b35;
		min-width: 120rpx;
	}

	.form-input {
		flex: 1;
		background-color: #f5f5f5;
		padding: 20rpx;
		border-radius: 8rpx;
		font-size: 28rpx;
	}

	.checkout-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx;
		width: 90%;
	}

	.price-info {
		display: flex;
		flex-direction: column;
	}

	.total-label {
		font-size: 28rpx;
		color: #333;
		margin-bottom: 10rpx;
	}

	.total-price {
		font-size: 40rpx;
		font-weight: bold;
		color: #ff6b35;
		margin-bottom: 8rpx;
	}

	.item-count {
		font-size: 24rpx;
		color: #999;
		margin-bottom: 100rpx;
	}

	.checked-btn {
		background: #ff6b35;
		color: white;
		padding: 20rpx 40rpx;
		border-radius: 40rpx;
		font-size: 32rpx;
		font-weight: 600;
		transition: all 0.2s;
		margin-bottom: 80rpx;
	}

	.checked-btn:active {
		background: #e55a2b;
		transform: scale(0.98);
	}
	
	.empty{
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text { font-size: 32rpx; color:#999; margin-bottom: 40rpx; }
		.empty-btn{
			background-color: #ff6b35;
			color: white;
			border: none;
			padding: 10rpx 20rpx;
			border-radius: 40rpx;
		}
	}
</style>