<template>
	<view class="menu-page">
		<view class="search-section">
			<view class="search-box">
				<uni-icons type="search" size="20" color="#999"></uni-icons>
				<input 
					type="text"
					placeholder="搜索菜品名称"
					class="search-input"/>
			</view>
		</view>
		
		<view class="main-content">
			<view class="category-nav">
				<view class="category-item"
				    v-for="category in categoriesWithCount" 
				    :key="category.id"
				    :class="{ active: activeCategory === category.id }"
				    @click="switchCategory(category.id)"
				>
				    <text class="category-name">{{ category.name }}</text>
				    <view class="category-count">{{ category.count }}</view>
				  </view>
			</view>
			<view class="food-list">
				<!-- 菜品项 -->
				<FoodCard v-for="food in filteredFoods" :key="food.id" :food="food"></FoodCard>
			</view>
		</view>
		
		<CartBar></CartBar>
	</view>
</template>

<script setup>
	import { categories, foodList } from '@/utils/mockData';
	import { ref, computed } from 'vue';

	const categoriesWithCount = computed(()=> {
		return categories.map(category => ({
			...category,
			count:foodList.filter(food => food.categoryId === category.id).length
		}))
	})

	const activeCategory = ref(1) // 默认选中第一个分类

	const switchCategory = (id) => {
		activeCategory.value = id
	}

	const filteredFoods = computed(() => {
		return foodList.filter(food => food.categoryId === activeCategory.value)
	})

	const goToDetail = (id) => {
		uni.navigateTo({
		url: `/pages/food-detail/food-detail?id=${id}`
		})
	}

</script>

<style lang="scss" scoped>
	.menu-page{
		height: 100vh;
		display: flex;
		flex-direction: column;
		background-color: #f8f8f8;
		padding-bottom: 140rpx;
	}
	
	.search-section{
		padding: 20rpx 30rpx;
		background-color: #ffffff;
		border-bottom: 1rpx solid #eeeeee;
	}
	
	.search-box{
		display: flex;
		align-items: center;
		background-color: #f5f5f5;
		border-radius: 40rpx;
		padding: 0 30rpx;
		height: 80rpx;
	}
	
	.search-input{
		flex: 1;
		margin-left: 20rpx;
		font-size: 28rpx;
		color: #333333;
		// height: 40rpx;
	}
	
	// .search-input::placeholder{
	// 	color: #999999;
	// }
	
	.main-content{
		flex: 1;
		display: flex;
		flex-direction: row;
		overflow: hidden;
	}
	
	.category-nav{
		width: 200rpx;
		background-color: #ffffff;
		// border-right: 1rpx solid #eeeeee;
		border-bottom: 1rpx solid #eeeeee;
		padding-top:20rpx;
	}
	
	.category-item{
		padding: 30rpx 20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}
	
	.category-item.active{
		background-color: #fff8f3;
	}
	
	.category-item.active::before{
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 6rpx;
		background-color: #ff6b35;
	}
	
	// .category-name{
	// 	font-size: 26rpx;
	// 	color: #666666;
	// 	margin-bottom: 15rpx;
	// 	text-align: center;
	// 	line-height: 1.4;
	// }
	
	.category-item.active .category-name{
		color: #ff6b35;
		font-weight: 600;
	}
	
	.category-count{
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
		background-color: #f0f0f0;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 22rpx;
		color: #999999;
	}
	
	.category-item.active .category-count{
		background-color: #ff6b35;
		color: #ffffff;
	}
	
	.food-list{
		flex: 1;
		padding: 30rpx;
		background-color: #ffffff;
		overflow-y: auto;
	}
	
	.food-item{
		display: flex;
		padding: 25rpx;
		margin-bottom: 25rpx;
		background-color: #ffffff;
		border-radius: 16rpx;
		box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.06);
	}
	
	.food-image{
		width: 180rpx;
		height: 180rpx;
		border-radius: 12rpx;
		overflow: hidden;
		margin-right: 25rpx;
		flex-shrink: 0;
		
		image{
		width: 100%;
		height: 100%;
		}
	}
	
	.food-info{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.food-name{
		font-size: 32rpx;
		font-weight: 600;
		color: #333333;
		margin-bottom: 15rpx;
	}
	
	.food-sales{
		font-size: 24rpx;
		color: #999999;
		margin-bottom: 10rpx;
	}
	
	.food-price{
		font-size: 36rpx;
		font-weight: bold;
		color: #ff6b35;
	}
</style>
