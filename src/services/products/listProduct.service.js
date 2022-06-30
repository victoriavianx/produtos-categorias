import database from "../../database";

const listProductService = async (productId) => {
  try {
    const res = await database.query(`SELECT * FROM product WHERE id = $1`, [
      productId,
    ]);

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default listProductService;
