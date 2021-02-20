const { createOrder } = require("../../utils/orderXml");
const orderXml = require('../../utils/orderXml')
const request = require('request')

const blingServices = {
  async createOrder() {
    return new Promise((resolve, reject) => {
      const xml = orderXml.createOrder()

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
  }
}

module.exports = blingServices