const productActions = (Products) => {
  /**
   * @param       GET /api/v1/product
   * @desc        displays all products
   * @access      public( Every one can access)
   */
  const products = async (req, res) => {
    try {
      const products = await Products.find({}).select(
        "-createdAt -updatedAt -__v"
      );
      res.status(200).json({ Total: products.length, products });
    } catch (err) {
      res.status(500).json(err);
    }
  };

  /**
   * @param       GET /api/v1/:productID
   * @desc        displays signle products
   * @access      public( Every one can access)
   */
  const product = async (req, res) => {
    try {
      const product = await Products.findById(req.params.productID);

      res.status(200).json({
        msg: "Item found",
        product,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  };

  /**
   * @param       POST /api/v1/product/new
   * @desc        Adds a new product to database
   * @access      public( Every one can access)
   */
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
      res.json({
        msg: `${product.name.toUpperCase()} successfully created`,
        product,
      });
    } catch (err) {
      res.json(err);
    }
  };

  /**
   * @param       GET /api/v1/product/edit/:productID
   * @desc        Makes changes to an existing product
   * @access      public( Every one can access)
   */
  const edit = async (req, res) => {
    try {
      const product = await Products.findByIdAndUpdate(req.params.productID, {
        $set: req.body,
      });
      res.status(200).json({
        msg: `${product.name.toUpperCase()} updated successfully`,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  };

  /**
   * @param       GET /api/v1/product/delt/:productID
   * @desc        Deletes a product from the database
   * @access      public( Every one can access)
   */
  const del = async (req, res) => {
    try {
      const product = await Products.findByIdAndDelete(req.params.productID);
      res.json({ msg: `${product.name.toUpperCase()} successfully deleted` });
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
