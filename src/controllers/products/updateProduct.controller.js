import updateProductService from "../../services/products/updateProduct.service";

const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const data = req.body;

  try {
    const updatedProduct = await updateProductService(productId, data);

    return res.status(200).json({
      message: "Product updated",
      product: updatedProduct,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default updateProduct;
