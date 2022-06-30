import listCategoryService from "../../services/categories/listCategory.service";

const listCategory = async (req, res) => {
  const categoryId = req.params.id;

  try {
    const category = await listCategoryService(categoryId);

    return res.status(200).json(category);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default listCategory;
