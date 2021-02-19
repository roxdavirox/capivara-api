const createApp = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = createApp()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

const port = process.env.PORT || 3001

app.listen(port, () => console.log(`Capivara Api is running at port ${port}`))