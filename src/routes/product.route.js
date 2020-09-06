const express = require('express')
const Products = require('./../model/product.model')
const { products, create, del, product, edit } = require('./../controller/product.Controller')(Products)
const { Router } = express

const productRouter = Router()

productRouter.route('/').get(products)
productRouter.route('/new').post(create)
productRouter.route('/:productID').get(product)
productRouter.route('/edit/:productID').patch(edit)
productRouter.route('/del/:productID').delete(del)

module.exports = productRouter