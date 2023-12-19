import mongoose from "mongoose";
import Project from "../models/project.js";

export const getProjects = async (req, res) => {
  try {
    // Assuming the user ID is in req.body._id
    const projects = await Project.find({ creator: req.userId }).sort({
      _id: -1,
    });

    res.status(200).json(projects);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProject = async (req, res) => {
  const project = req.body.newProject;
  console.log(project);
  const newProject = new Project({
    ...project,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  try {
    await newProject.save().then(() => {
      console.log("Project Added Successfully");
    });
    console.log(newProject);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(434).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  const { id: _id } = req.params;
  const project = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No project with that id");

  const updatedProject = await Project.findByIdAndUpdate(
    _id,
    { ...project, _id },
    { new: true }
  );
  res.json(updatedProject);
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No project with that id");

  await Project.findByIdAndDelete(id);
  res.json({ message: "Project deleted successfully!" });
};
