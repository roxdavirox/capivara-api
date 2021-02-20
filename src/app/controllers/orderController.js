const express = require('express')
const pipedriveServices = require('../services/pipedriveServices')
const blingServices = require('../services/blingServices')
const orderServices = require('../services/orderServices')
const { createOrder } = require('../../utils/orderXml')
const router = express.Router()

const orderController = {
  async getTotalValueToday(req, res) {
    try {
      const deals = await pipedriveServices.getAllWonDeals()
      const orders = await blingServices.createOrders(deals)
      await orderServices.updateTotalValue(orders)
      const totalOrdersValueToday = await orderServices.getTotalvalueToday()
      return res.send({ total: totalOrdersValueToday, orders })
    } catch(e) {
      return res.status(400)
        .send({ error: `Error on get total value: ${e}` });
    }
  },
}

router.get('/today', orderController.getTotalValueToday)

module.exports = app => app.use('/order', router)