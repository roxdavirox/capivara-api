const axios = require('axios');

const urlPipedriveApi = process.env.PIPEDRIVE_API;
const pipedriveApi = axios.create({
  baseURL: `${urlPipedriveApi}`,
});

module.exports = { pipedriveApi };