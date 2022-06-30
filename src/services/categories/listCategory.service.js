import database from "../../database";

const listCategoryService = async (categoryId) => {
  try {
    const res = await database.query(
      `
        SELECT
            id, name
        FROM
            categories
        WHERE 
            id = $1`,
      [categoryId]
    );

    if (!res.rowCount) {
      throw new Error("Category not found");
    }

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default listCategoryService;
