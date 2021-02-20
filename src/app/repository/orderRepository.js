const Order = require('../models/order')

const today = () => {
  const now = new Date();
  const startToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return startToday
}

const orderRepository = {
  async updateTodayOrders(value) {
    console.log('value', value)
    const [order] = await Order.find({ createdAt: { $gte: today() } })
    if (order) {
      order.value = value
      await order.save()
      return
    }
    await Order.create({ value })
  },

  async getTotalOrderValueToday() {

  }
}

module.exports = orderRepository