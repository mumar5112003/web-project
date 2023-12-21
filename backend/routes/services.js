import express from "express";
import {
  getServices,
  updateServices,
  deleteServices,
  createServices,
} from "../controllers/services.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getServices);

// Use the 'uploadImage' middleware to handle image uploads
router.post("/", auth, createServices);

router.put("/:id", auth, updateServices);

router.delete("/:id", auth, deleteServices);

export default router;
