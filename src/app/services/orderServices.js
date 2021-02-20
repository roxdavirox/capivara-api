const orderRepository = require('../repository/orderRepository')

const orderServices = {
  async updateTotalValue(orders) {
    const totalValue = orders.reduce((total, order) => total + order.value, 0)
    await orderRepository.updateTodayOrders(totalValue)
  },

  async getTotalvalueToday() {
    return await orderRepository.getTotalOrderValueToday()
  }
}

module.exports = orderServices