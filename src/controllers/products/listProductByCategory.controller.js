import listProductByCategoryService from "../../services/products/listProductByCategory.service";

const listProductByCategory = async (req, res) => {
  const categoryId = req.params.category_id;

  try {
    const product = await listProductByCategoryService(categoryId);

    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default listProductByCategory;
