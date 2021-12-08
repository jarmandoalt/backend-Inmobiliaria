const express = require ('express')
const upload = require ('../libs/storage')
const { addClient, getClient, deleteClient } = require ('../controllers/clientControl')
const api = express.Router()


api.post('/client', upload.single('profile'), addClient)
api.get('/client', getClient)
api.delete('/client', deleteClient)

module.exports = api

