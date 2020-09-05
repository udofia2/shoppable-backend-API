const mongoose = require('mongoose')

const { Schema } = mongoose;

const product = new Schema({
    name: {
        type:String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    price: {
        type: String
    },
    brand: {
        type: String
    },
    rating: {
        type: Number
    },
    numReviews: {
        type: Number
    }
})

module.exports = mongoose.model('products', product)