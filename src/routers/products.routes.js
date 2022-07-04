import { Router } from "express";
import isProductExists from "../middlewares/isProductExists.middleware";
import isCategoryExists from "../middlewares/isCategoryExists.middleware";
import createProduct from "../controllers/products/createProduct.controller";
import listProducts from "../controllers/products/listProducts.controller";
import listProduct from "../controllers/products/listProduct.controller";
import updateProduct from "../controllers/products/updateProduct.controller";
import deleteProduct from "../controllers/products/deleteProduct.controller";
import listProductByCategory from "../controllers/products/listProductByCategory.controller";

const productsRouter = Router();

productsRouter.post("", createProduct);
productsRouter.get("", listProducts);
productsRouter.get("/:id", listProduct);
productsRouter.patch("/:id", updateProduct);
productsRouter.delete("/:id", deleteProduct);
productsRouter.get("/category/:category_id", listProductByCategory);

export default productsRouter;
