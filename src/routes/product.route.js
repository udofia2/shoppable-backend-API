const express = require('express')

const { Router } = express()

const productRouter = Router()

productRouter.route('/').get()
productRouter.route('/:productID').get()
productRouter.route('/new').post()
productRouter.route('/edit').patch()