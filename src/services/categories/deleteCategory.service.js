import database from "../../database";

const deleteCategoryService = async (categoryId) => {
  try {
    const res = await database.query(
      `DELETE FROM categories WHERE id = $1 RETURNING *`,
      [categoryId]
    );

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default deleteCategoryService;
