import createCategoryService from "../../services/categories/createCategory.service";

const createCategory = async (req, res) => {
  try {
    const category = await createCategoryService(req.body);

    return res.status(201).json({
      message: "Category created",
      category: category,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default createCategory;
