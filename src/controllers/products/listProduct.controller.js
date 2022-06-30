import listProductService from "../../services/products/listProduct.service";

const listProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await listProductService(productId);

    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default listProduct;
