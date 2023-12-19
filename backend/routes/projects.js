import auth from "../middleware/auth.js";
import express from "express";
import {
  getProjects,
  updateProject,
  deleteProject,
  createProject,
} from "../controllers/projects.js";

const router = express.Router();

router.post("/get/", auth, getProjects);

router.post("/", auth, createProject);

router.patch("/:id", auth, updateProject);

router.delete("/:id", auth, deleteProject);

export default router;
