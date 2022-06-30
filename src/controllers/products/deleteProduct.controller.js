import deleteProductService from "../../services/products/deleteProduct.service";

const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const deletedProduct = await deleteProductService(productId);

    return res.status(200).json({
      message: "Product deleted",
      product: deletedProduct,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default deleteProduct;
