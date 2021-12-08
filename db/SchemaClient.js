const mongoose = require ('mongoose')
const { Schema } = mongoose
const { appConfig } = require ('../config')

const schemaClient = new Schema ({
    name: String,
    number: Number,
    direction: String,
    imgUrl: String

},{
    timestamps: true
})

schemaClient.methods.setImgUrl = function setImagUrl (filename) {
    const { host, port } = appConfig
    this.imgUrl = `${host}:${port}/public/${filename}`
    
}

module.exports = mongoose.model('Client', schemaClient)