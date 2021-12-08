const mongoose = require ('mongoose')
const { Schema } = mongoose
const { appConfig } = require ('../config')

const schemaProduct = new Schema ({
    name: String,
    quantity: Number,
    price: Number,
    imgUrl: String,
    description: String,
    

},{
    timestamps: true
})

schemaProduct.methods.setimgUrl= function setimgUrl (filename) {
    const { host, port } = appConfig
    this.imgUrl = `${host}:${port}/public/${filename}`
}

module.exports = mongoose.model('Product', schemaProduct)