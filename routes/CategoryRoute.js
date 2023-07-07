import express from "express";
import { isAdmin, requireSignin } from "../middlewares/authmiddleware.js";
import {
  createCategoryController,
  updateCategoryController,
  categoryController,
  singleCategoryController,
  deleteCategoryController,
  singleCategoryByidController,
} from "../controller/categoryController.js";
const router = express.Router();
//reate category
router.post(
  "/create-category",
  requireSignin,
  isAdmin,
  createCategoryController
);
//update category
router.put(
  "/update-category/:id",
  requireSignin,
  isAdmin,
  updateCategoryController
);
//get all category
router.get("/get-category", categoryController);
//single category
router.get("/single-category/:slug", singleCategoryController);
//get category by id
router.get("/single-category-by-id/:id", singleCategoryByidController);
//delete category
router.delete("/delete-category/:id", requireSignin,isAdmin ,deleteCategoryController)
export default router;
