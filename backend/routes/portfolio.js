import express from "express";
import {
  getPortfolio,
  updatePortfolio,
  deletePortfolio,
  createPortfolio,
  uploadImage,
} from "../controllers/portfolio.js";

const router = express.Router();

router.get("/", getPortfolio);

// Use the 'uploadImage' middleware to handle image uploads
router.post("/", uploadImage, createPortfolio);

router.put("/:id", uploadImage, updatePortfolio);

router.delete("/:id", deletePortfolio);

export default router;
