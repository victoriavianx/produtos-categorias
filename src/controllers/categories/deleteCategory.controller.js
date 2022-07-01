import deleteCategoryService from "../../services/categories/deleteCategory.service";

const deleteCategory = async (req, res) => {
  const categoryId = req.params.id;

  try {
    const deletedCategory = await deleteCategoryService(categoryId);

    return res.status(204).json({
      message: "Category deleted",
      category: deletedCategory,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default deleteCategory;
