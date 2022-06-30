import createProductService from "../../services/products/createProduct.service";

const createProduct = async (req, res) => {
  try {
    const product = await createProductService(req.body);

    return res.status(201).json({
      message: "Product created",
      product: product,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default createProduct;
