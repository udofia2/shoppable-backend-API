const productActions = (Products) => {
  const products = async (req, res) => {
    try {
        const products = await Products.find({}).select(
          "-createdAt -updatedAt -__v"
        );
        res.status(200).json({ Total: products.length, products });
        
    } catch (err) {
        res.status(500).json(err)        
    }
  };

  const product = (req, res) => {
    try{
        const product = await Products.find(req.params.productID)
          res.status(200).json(product)
    }  catch(err) {
        res.status(500).json(err)
    }
  }
  const create = async (req, res) => {
    try {
      const {
        name,
        price,
        category,
        brand,
        rating,
        numReviews,
        image,
      } = req.body;

      const product = new Products({
        name,
        price,
        category,
        brand,
        rating,
        numReviews,
        image,
      });

      await product.save();
      res.json("create a new product");
    } catch (err) {
      res.json(err);
    }
  };

  const edit = async (req, res) => {
      try
      const product = await Products.findByIdAndUpdate(req.params.productID, {$set: req.body})
  }

  const del = async (req, res) => {
    try {
      const product = await Products.findByIdAndDelete(req.params.productID);
      res.json({ msg: `${product.name} successfully deleted` });
    } catch (err) {
      res.json(err);
    }
  };
  return {
    products,
    product,
    create,
    edit,
    del,
  };
};

module.exports = productActions;
