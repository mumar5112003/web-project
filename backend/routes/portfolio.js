import express from "express";
import {
  getPortfolio,
  updatePortfolio,
  deletePortfolio,
  createPortfolio,
  uploadImage,
} from "../controllers/portfolio.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPortfolio);

// Use the 'uploadImage' middleware to handle image uploads
router.post("/", auth, uploadImage, createPortfolio);

router.put("/:id", auth, uploadImage, updatePortfolio);

router.delete("/:id", auth, deletePortfolio);

export default router;
