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
categoryRouter.get("/:id", listCategory);
categoryRouter.patch("/:id", updateCategory);
categoryRouter.delete("/:id", deleteCategory);

export default categoryRouter;
