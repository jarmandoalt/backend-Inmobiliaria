const express = require ('express')
const cors = require ('cors')
const clientRoutes = require ('./routes/clientRoute')
const productRoutes = require ('./routes/productRoute')

const app = express()

app.use(cors())
app.use(express.urlencoded())
app.use(express.json())

app.use('/public', express.static(`${__dirname}/storage/imgs`))
app.use('/v1', clientRoutes)
app.use('/v1', productRoutes)


module.exports = app

