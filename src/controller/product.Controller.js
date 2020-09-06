const productActions = (Products) => {
  const products = async (req, res) => {
    const products = await Products.find({});
    res.json(products);
  };

  const createProduct = async (req, res) => {
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
        res.json(err)
    }
  };
  return {
    products,
    createProduct,
  };
};

module.exports = productActions;
