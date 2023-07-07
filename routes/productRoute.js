import express from "express";
import { isAdmin, requireSignin } from "../middlewares/authmiddleware.js";
import {
  createProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  productDeleteController,
  UpdateProductController,
  productFilterController,
  productCountController,
  productListController,
  searchProductController,
  realtedProductController,
  productCategoryController,
} from "../controller/productController.js";
import formidable from "express-formidable";
const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignin,
  isAdmin,
  formidable(),
  createProductController
);
//update product
router.put(
  "/update-product/:pid",
  requireSignin,
  isAdmin,
  formidable(),
  UpdateProductController
);

//get product
router.get("/get-product", getProductController);
//get single product
router.get("/get-product/:slug", getSingleProductController);
//get photo
router.get("/product-photo/:pid", productPhotoController);
//delete product

router.delete("/delete-product/:pid", productDeleteController);
//filter product
router.post("/product-filters", productFilterController);
//product count
router.get("/product-count", productCountController);
// product per page
router.get("/product-list/:page", productListController);
// Search product
router.get("/search/:keyword", searchProductController);
//similar product
router.get("/related-product/:pid/:cid", realtedProductController);
//category wise product 
router.get("/product-category/:slug",productCategoryController)
export default router;
