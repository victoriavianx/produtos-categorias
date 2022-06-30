import database from "../database";

const isCategoryExists = async (req, res, next) => {
  const categoryId = req.params.id;

  const findCategory = await database.query(
    `SELECT * FROM categories WHERE id = $1`,
    [categoryId]
  );

  if (findCategory === false) {
    return res.status(404).json({
      message: "Category not found",
    });
  }

  return next();
};

export default isCategoryExists;
