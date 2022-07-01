import database from "../../database";

const listCategoryService = async (categoryId) => {
  try {
    const res = await database.query(
      `
        SELECT
            *
        FROM
            categories
        WHERE 
            id = $1`,
      [categoryId]
    );

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default listCategoryService;
