import { Router } from "express";
import isCategoryExists from "../middlewares/isCategoryExists.middleware";
import createCategory from "../controllers/categories/createCategory.controller";
import listCategories from "../controllers/categories/listCategories.controller";
import listCategory from "../controllers/categories/listCategory.controller";
import updateCategory from "../controllers/categories/updateCategory.controller";
import deleteCategory from "../controllers/categories/deleteCategory.controller";

const categoryRouter = Router();

categoryRouter.post("", createCategory);
categoryRouter.get("", listCategories);
categoryRouter.get("/:id", isCategoryExists, listCategory);
categoryRouter.patch("/:id", isCategoryExists, updateCategory);
categoryRouter.delete("/:id", isCategoryExists, deleteCategory);

export default categoryRouter;
