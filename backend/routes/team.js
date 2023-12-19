import express from "express";
import {
  getTeam,
  updateTeam,
  deleteTeam,
  createTeam,
  uploadImage,
} from "../controllers/team.js";

const router = express.Router();

router.get("/", getTeam);

// Use the 'uploadImage' middleware to handle image uploads
router.post("/", uploadImage, createTeam);

router.put("/:id", uploadImage, updateTeam);

router.delete("/:id", deleteTeam);

export default router;
