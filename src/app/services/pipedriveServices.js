
const { pipedriveApi } = require('../../services/api')

const apiToken = process.env.PIPEDRIVE_API_TOKEN

const pipedriveServices = {
  async getAllWonDeals() {
    const url = `deals?status=won&start=0&api_token=${apiToken}`
    const res = await pipedriveApi.get(url)
    const deals = await res.data
    const { data } = deals
    return data
  }
}

module.exports = pipedriveServices