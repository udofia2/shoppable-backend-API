const productActions = (Products) => {
  const products = async (req, res) => {
    const products = await Products.find({}).select(
      "-createdAt -updatedAt -__v"
    );
    res.json(products);
  };

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

  const del = async (req, res) => {
      try {
          const product = await Products.findByIdAndDelete(req.params.productID);
          res.json({ msg: `${product.name} successfully deleted` });
          
      } catch (err) {
          res.json(err)
      }
  };
  return {
    products,
    create,
    del
  };
};

module.exports = productActions;
