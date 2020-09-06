const express = require('express')
const bodyParser = require('body-parser')
const { PORT, url } = require('./src/config/env')
require('./src/config/database')()

const app = express()

app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))


app.use('/api/v1/product', require('./src/routes/product.route'))

app.listen(PORT, ()=>console.log(`Server is started on ${url}:${PORT}`))
