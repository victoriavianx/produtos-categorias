import updateCategoryService from "../../services/categories/updateCategory.service";

const updateCategory = async (req, res) => {
  const category = req.body;
  const categoryId = req.params.id;

  try {
    const categoryUpdated = await updateCategoryService(category, categoryId);

    return res.status(200).json({
      message: "Category updated",
      category: categoryUpdated,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default updateCategory;
