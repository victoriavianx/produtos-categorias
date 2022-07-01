import database from "../database";

const isProductExists = async (req, res, next) => {
  const productId = req.params.id;

  const findProduct = await database.query(
    `SELECT * FROM products WHERE id = $1`,
    [productId]
  );

  if (!findProduct) {
    res.status(404).json({
      message: "Product not found",
    });
  }

  return next();
};

export default isProductExists;
