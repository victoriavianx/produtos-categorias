import database from "../../database";

const listCategoriesService = async () => {
  try {
    const res = await database.query(`
        SELECT 
            id, name
        FROM 
            categories`);

    return res.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default listCategoriesService;
