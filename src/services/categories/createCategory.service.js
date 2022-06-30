import database from "../../database";
import { v4 as uuidv4 } from "uuid";

const createCategoryService = async (data) => {
  try {
    const res = await database.query(
      `INSERT INTO 
        categories (id, name)
      VALUES 
        ($1, $2)
      RETURNING id, name`,
      [uuidv4(), data.name]
    );

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default createCategoryService;
