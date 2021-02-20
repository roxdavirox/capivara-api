const orderXml = require('../../utils/orderXml')
const request = require('request')

const blingServices = {
  async createOrder(order) {
    return new Promise((resolve, reject) => {
      const xml = orderXml.createOrder(order)

      const options = {
        url: process.env.BLING_URL_API,
        method: "POST",
        headers: {
          'Content-type': 'application/x-www-form-urlencoded'
        },
        body: `apikey=${process.env.BLING_API_KEY}&xml=${xml}`
      };

      request.post(options, (err, res, body) => {
        if (err) {
          console.log('create order error', err)
          reject(err)
          return
        }
        resolve(body)
      })
    })
  },

  async createOrders(orders) {
    const ordersPromise = orders.map(async order => await this.createOrder(order))
    await Promise.all(ordersPromise)
    return orders
  }
}

module.exports = blingServices