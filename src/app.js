import express from "express";
import categoryRouter from "./routers/categories.routes";
import productsRouter from "./routers/products.routes";
import { startDatabase } from "./database";
import "dotenv/config";

const app = express();

app.use(express.json());

app.use("/categories", categoryRouter);
app.use("/products", productsRouter);

const PORT = process.env.PORT || 3333;

export default app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  startDatabase();
});
