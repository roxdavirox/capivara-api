const createApp = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const loadRoutes = require('./app/controllers/loadControllers')

const app = createApp()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

require('dotenv').config()
loadRoutes(app)

const port = process.env.PORT || 3001

app.listen(port, () => console.log(`Capivara Api is running at port ${port}`))