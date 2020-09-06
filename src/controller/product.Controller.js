const productActions = (Product) => {
    
    const products = async (req, res) => {
        const products = await Product.find({})
        res.json('This is all the products')
    }


    return {
        products,

    }
}

module.exports = productActions