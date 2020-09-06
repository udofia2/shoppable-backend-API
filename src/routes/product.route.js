const express = require('express')
const Products = require('./../model/product.model')
const { products, create, del } = require('./../controller/product.Controller')(Products)
const { Router } = express

const productRouter = Router()

productRouter.route('/').get(products)
productRouter.route('/:productID').get()
productRouter.route('/new').post(create)
productRouter.route('/edit').patch()
productRouter.route('/del/:productID').delete(del)

module.exports = productRouter