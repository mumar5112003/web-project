import express from "express";
import {
  getServices,
  updateServices,
  deleteServices,
  createServices,
} from "../controllers/services.js";

const router = express.Router();

router.get("/", getServices);

// Use the 'uploadImage' middleware to handle image uploads
router.post("/", createServices);

router.put("/:id", updateServices);

router.delete("/:id", deleteServices);

export default router;
