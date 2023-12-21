import express from "express";
import {
  getTeam,
  updateTeam,
  deleteTeam,
  createTeam,
  uploadImage,
} from "../controllers/team.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getTeam);

// Use the 'uploadImage' middleware to handle image uploads
router.post("/", auth, uploadImage, createTeam);

router.put("/:id", auth, uploadImage, updateTeam);

router.delete("/:id", auth, deleteTeam);

export default router;
