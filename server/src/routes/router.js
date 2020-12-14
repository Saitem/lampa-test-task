const Product = require('../schemas/product.schema')
const Order = require('../schemas/order.schema')
const router = require('express').Router()


router.get('/products', (req, res) => {
    Product
        .find({})
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err))
})

router.post('/product/add', (req, res) => {
    const { title, desc, price, img } = req.body
    const newProduct = new Product({
        title,
        desc, 
        price,
        img
    })

    newProduct
        .save()
        .then(product => res.send(product))
        .catch(err => res.send(err))
})


router.post('/order/create', (req, res) => {
    const newOreder = new Order({
        addedProducts: req.body.addedProducts,
        total: req.body.total,
        user: req.body.user
    })

    newOreder
        .save()
        .then(order => res.send(order))
        .catch(err => res.send(err))
})

router.get('/orders', (req, res) => {
    Order
        .find({})
        .then(orders => res.status(200).send(orders))
        .catch(err => res.status(500).send(err))
})

module.exports = router