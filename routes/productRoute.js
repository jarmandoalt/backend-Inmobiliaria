const express = require ('express')
const upload = require ('../libs/storage')
const { addProduct, getProduct, deleteProduct } = require('../controllers/productControl')
const api = express.Router()


api.post('/product', upload.single('image'), addProduct)
api.get('/product', getProduct)
api.delete('/product', deleteProduct)

module.exports = api