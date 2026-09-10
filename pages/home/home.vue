<template>
	<!-- 首页容器 -->
	<view class="home-page">
		<!-- 轮播图区域 -->
		<view class="banner-section">
			<swiper
				class="banner-swiper"
				:indicator-dots="true"
				:autoplay="true"
				:interval="3000"
				:duration="1000"
				indicator-color="rbga(225,225,225,0.5)"
				indicator-active-color="#FF6b35">
				<swiper-item v-for="banner in banners" :key="banner.id" class="banner-item">
					<image :src="banner.image" mode="aspectFill" class="banner-image"></image>
				</swiper-item>
			</swiper>
		</view>
		
		<!-- 三图合一区域 -->
		<view class="three-image-section">
			<!-- 左侧今日推荐菜品 -->
			<view class="special-card" @click="goToDetail(todaySpecial.id)">
				<!-- 菜品图片 -->
				<image src="/static/foods/20.jpg" mode="aspectFill" class="special-image"></image>
				<!-- 菜品信息 -->
				<view class="special-info">
					<view class="special-tag">
						{{todaySpecial.tag}}
					</view>
					<text class="special-name">{{todaySpecial.name}}</text>
					<view class="special-price">
						<text class="current-price">￥{{todaySpecial.price}}</text>
					</view>
				</view>
			</view>
			<!-- 右侧功能入口 -->
			<view class="function-cards">
				<!-- 门店自取 -->
				<view class="function-card pickup">
					<view class="function-icon">
						🏪
					</view>
					<text class="function-title">门店自取</text>
				</view>
				
				<!-- 外卖配送 -->
				<view class="function-card delivery">
					<view class="function-icon">
						🚗
					</view>
					<text class="function-title">外卖配送</text>
				</view>
			</view>
		</view>
		
		<!-- 门店介绍卡片 -->
		<view class="store-intro-card">
			<!-- 品牌信息区域 -->
			<view class="brand-section">
				<text class="brand-name">{{storeInfo.name}}</text>
				<text class="brand-slogan">{{storeInfo.slogan}}</text>
			</view>
			<!-- 特色标签区域 -->
			<view class="feature-tags">
				<!-- 新鲜食材 -->
				<view class="tag-item">
					<uni-icons type="shop" color="#52C41A" size="24"></uni-icons>
					<text>新鲜食材</text>
				</view>
				<!-- 传统手艺 -->
				<view class="tag-item">
					<uni-icons type="staff" color="#FF6B35" size="24"></uni-icons>
					<text>传统手艺</text>
				</view>
				<!-- 舒适环境 -->
				<view class="tag-item">
					<uni-icons type="home" color="#1890FF" size="24"></uni-icons>
					<text>舒适环境</text>
				</view>
			</view>
			<!-- 详细描述区域 -->
			<view class="description">
				<text>{{storeInfo.description}}</text>
			</view>
			<!-- 营业信息卡片 -->
			<view class="info-card">
				<!-- 地址信息 -->
				<view class="info-item">
					<uni-icons type="location-filled" size="16" color="#FF6B35"></uni-icons>
					<text class="info-text">{{storeInfo.address}}</text>
				</view>
				<!-- 电话信息 -->
				<view class="info-item">
					<uni-icons type="phone" size="16" color="#1890FF"></uni-icons>
					<text class="info-text">{{storeInfo.phone}}</text>
				</view>
				<!-- 营业时间信息 -->
				<view class="info-item">
					<uni-icons type="notification" size="16" color="#52C41A"></uni-icons>
					<text class="info-text">{{storeInfo.hours}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { 
	  banners, 
	  todaySpecial, 
	  storeInfo
	} from '@/utils/mockData'
	
	const goToDetail = (id) => {
	  uni.navigateTo({
	    url: '/pages/food-detail/food-detail?id=' + id
	  })
	}

</script>

<style>
	.home-page{
		padding: 20rpx;
		padding-bottom: 120rpx;
		background-color: #f8f9fa;
		padding-bottom: 0;
	}
	
	.banner-section{
		margin-bottom: 30rpx;
		border-radius: 20rpx;
		overflow: hidden;
		box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.1);
		.banner-swiper{
			height: 300rpx;
		}
		.banner-image{
			width: 100%;
			height: 100%;
		}
	}
	
	.three-image-section{
		display: flex;
		gap: 20rpx;
		margin-bottom: 30rpx;
		
		.special-card{
			flex: 2;
			background: white;
			border-radius: 20rpx;
			overflow: hidden;
			position: relative;
			box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.08);
			/* 不加高度图片扁扁的，不用加 */
			/* height: 360rpx; */
		}
		
		.special-image{
			width: 100%;
			height: 100%;
		}
		
		.special-info{
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			padding: 20rpx;
			text-shadow: 
				2px 0 0 #FF6b35,
				-2px 0 0 #FF6b35,
				0 2px 0 #FF6b35,
				0-2px 0 #FF6b35,
				1px 1px 0 #FF6b35,
				-1px -1px 0 #FF6b35,
				1px 1px 0 #FF6b35;
			color: white;
		}
		
		.special-tag{
			display: inline-block;
			background: #FF6B35;
			color: white;
			padding: 6rpx 16rpx;
			border-radius: 20rpx;
			font-size: 22rpx;
			margin-bottom: 10rpx;
		}
		
		.special-name{
			display: block;
			font-size: 32rpx;
			font-weight: bold;
			margin-bottom: 10rpx;
		}
		
		.current-price{
			font-size: 36rpx;
			font-weight: bold;
			color: #FFD700;
		}
		
		.function-cards{
			flex: 1;
			display: flex;
			flex-direction: column;
			gap: 20rpx;
			
			.function-card{
				flex: 1;
				background: #fff;
				border-radius: 20rpx;
				padding: 30rpx 20rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.08);
			}
			.pickup{
				border: 2rpx solid #FF6B35;
			}
			.delivery{
				background: linear-gradient(135deg,#FF6B35,#FF9D00);
				color: white;
			}
			
			.function-icon{
				font-size: 60rpx;
				margin-bottom: 15rpx;
			}
			
			.function-title{
				font-size: 30rpx;
				font-weight: bold;
			}
		}
	}
	
	.store-intro-card{
		background: white;
		border-radius: 20rpx;
		padding: 40rpx 30rpx;
		margin-bottom: 20rpx;
		box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.08);
		
		.brand-section{
			text-align: center;
			margin-bottom: 30rpx;
			
			.brand-name{
				display: block;
				font-size: 40rpx;
				font-weight: bold;
				color: #FF6B35;
				margin-bottom: 10rpx;
			}
			
			.brand-section{
				display: block;
				font-size: 28rpx;
				color: #666;
			}
		}
		
		.feature-tags{
			display: block;
			flex-direction: row;
			margin-bottom: 30rpx;
			gap: 20rpx;
			
			.tag-item{
				display: flex;
				flex-direction: column;
				align-items: center;
				padding: 20rpx 0;
				background-color: #F8F8F8;
				border-radius: 15rpx;
				flex: 1;
			}
			
			uni-coins{
				margin-bottom: 10rpx;
			}
			
			text{
				font-size: 24rpx;
				color: #333;
			}
		}
		.description{
			font-size: 28rpx;
			color: #333;
			line-height: 1.6;
			margin-bottom: 30rpx;
			text-align: center;
			padding: 0 10rpx;
		}
		
		.info-card{
			background: #FFF8F0;
			border-radius: 15rpx;
			padding: 30rpx;
			
			.info-item{
				display: flex;
				align-items: center;
				margin-bottom: 20rpx;
			}
			&:last-child{
				margin-bottom: 0;
			}
			
			uni-icons{
				margin-right: 15rpx;
				flex-shrink: 0;
			}
			
			.info-text{
				font-size: 26rpx;
				color: #333;
				line-height: 1.5;
				flex: 1;
			}
		}
	}
</style>
