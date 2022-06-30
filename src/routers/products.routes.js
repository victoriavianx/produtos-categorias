import { Router } from "express";
import isProductExists from "../middlewares/isProductExists.middleware";
import createProduct from "../controllers/products/createProduct.controller";
import listProducts from "../controllers/products/listProducts.controller";
import listProduct from "../controllers/products/listProduct.controller";
import updateProduct from "../controllers/products/updateProduct.controller";
import deleteProduct from "../controllers/products/deleteProduct.controller";

const productsRouter = Router();

productsRouter.post("", createProduct);
productsRouter.get("", listProducts);
productsRouter.get("/:id", isProductExists, listProduct);
productsRouter.patch("/:id", isProductExists, updateProduct);
productsRouter.delete("/:id", isProductExists, deleteProduct);

export default productsRouter;
