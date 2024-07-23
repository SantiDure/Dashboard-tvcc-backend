import { Router } from "express";
import { getProducts, getProductsForId } from "../../controllers/product.controller.js";

const productRouter= Router()

productRouter.get("/", getProducts);
productRouter.get("/:pid", getProductsForId);

export default productRouter