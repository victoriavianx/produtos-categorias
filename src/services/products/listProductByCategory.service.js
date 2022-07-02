import database from "../../database";

const listProductByCategoryService = async (categoryId) => {
  try {
    const res = await database.query(
      `
            SELECT
                products.name,
                products.price,
                categories.name
            FROM
                products
                INNER JOIN categories ON products.category_id = $1`,
      [categoryId]
    );

    return res.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default listProductByCategoryService;
