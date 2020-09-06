const express = require('express')
const Products = require('./../model/product.model')
const { products, createProduct } = require('./../controller/product.Controller')(Products)
const { Router } = express

const productRouter = Router()

productRouter.route('/').get(products)
productRouter.route('/:productID').get()
productRouter.route('/new').post(createProduct)
productRouter.route('/edit').patch()

module.exports = productRouter