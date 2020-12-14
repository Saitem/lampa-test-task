const mongoose = require('mongoose')
const { Schema } = mongoose

const orderSchema = new Schema({
    addedProducts: [
        {
            title: String,
            desc: String,
            price: Number,
            qty: Number,
            img: String
        }
    ],
    total: Number,
    user: {
        name: String,
        surname: String,
        address: String,
        phone: Number
    }
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order