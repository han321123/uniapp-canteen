// stores/cart.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // ---------- state（状态） ----------
  /** 购物车中的商品列表，每个商品包含 id, name, price, image, quantity */
  const items = ref([])

  /** 配送方式，默认为 'takeaway'（自取），可选 'delivery'（外卖）等 */
  const deliveryType = ref('takeaway')

  /** 是否处于下单模式（例如用于控制结算流程的开关） */
  const orderMode = ref(false)

  // ---------- getters（计算属性） ----------
  /** 购物车中所有商品的总数量 */
  const totalCount = computed(() => 
    items.value.reduce((sum, item) => sum + item.quantity, 0)
  )

  /** 购物车中所有商品的总价格（单价 × 数量） */
  const totalPrice = computed(() => 
    items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  )

  // ---------- actions（方法） ----------
  /**
   * 根据商品 ID 获取该商品在购物车中的数量
   * @param {string|number} foodId 商品 ID
   * @returns {number} 数量，如果不存在则返回 0
   */
  const getItemQuantity = (foodId) => {
    const item = items.value.find(item => item.id === foodId)
    return item ? item.quantity : 0
  }

  /**
   * 向购物车添加一个商品（如果已存在则数量 +1）
   * @param {Object} food 商品对象，包含 id, name, price, image 等属性
   */
  const addItem = (food) => {
    const existingItem = items.value.find(item => item.id === food.id)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      items.value.push({
        id: food.id,
        name: food.name,
        price: food.price,
        image: food.image,
        quantity: 1
      })
    }
  }

  /**
   * 更新购物车中指定商品的数量
   * @param {string|number} foodId 商品 ID
   * @param {number} quantity 新数量（如果 ≤0 则自动移除该商品）
   */
  const updateItemQuantity = (foodId, quantity) => {
    if (quantity <= 0) {
      removeItem(foodId)
      return
    }
    const item = items.value.find(item => item.id === foodId)
    if (item) {
      item.quantity = quantity
    }
  }

  /**
   * 从购物车中移除指定商品
   * @param {string|number} foodId 商品 ID
   */
  const removeItem = (foodId) => {
    const index = items.value.findIndex(item => item.id === foodId)
    if (index !== -1) {
      items.value.splice(index, 1)
      // 如果购物车变空，自动退出订单模式
      if (items.value.length === 0) {
        orderMode.value = false
      }
    }
  }

  /** 清空整个购物车，并退出订单模式 */
  const clearCart = () => {
    items.value = []
    orderMode.value = false
  }

  /**
   * 设置配送方式
   * @param {string} type 配送方式标识，如 'takeaway' 或 'delivery'
   */
  const setDeliveryType = (type) => {
    deliveryType.value = type
  }

  /**
   * 设置订单模式状态
   * @param {boolean} mode 是否开启订单模式
   */
  const setOrderMode = (mode) => {
    orderMode.value = mode
  }

  // 返回所有需要暴露给组件使用的属性和方法
  return {
    items,
    deliveryType,
    orderMode,
    totalCount,
    totalPrice,
    getItemQuantity,
    addItem,
    updateItemQuantity,
    removeItem,
    clearCart,
    setDeliveryType,
    setOrderMode
  }
})
