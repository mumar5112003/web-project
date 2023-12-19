import TeamModel from "../models/team.js";
import multer from "multer";

const storage = multer.memoryStorage(); // Store files in memory as buffers
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // Increase the size limit to 10 MB or adjust as needed
  },
});

export const getTeam = async (req, res) => {
  try {
    const teamMembers = await TeamModel.find();

    res.json(teamMembers);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createTeam = async (req, res) => {
  try {
    // Assuming 'image' is the key for the image data in the request body
    const { name, age, phone, email, position, image } = req.body;

    // Convert the base64-encoded image to a buffer
    // const imageBuffer = Buffer.from(image.split(",")[1], "base64");

    // Create a new team member with the image buffer
    const newTeamMember = await TeamModel.create({
      name,
      age,
      phone,
      email,
      position,
      image,
    });

    res.json(newTeamMember);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateTeam = async (req, res) => {
  try {
    // Assuming 'image' is the key for the image data in the request body
    const { name, age, phone, email, position, image } = req.body;

    // Convert the base64-encoded image to a buffer
    // const imageBuffer = Buffer.from(image.split(",")[1], "base64");

    // Update the team member with the new image buffer
    const updatedTeamMember = await TeamModel.findByIdAndUpdate(
      req.params.id,
      {
        name,
        age,
        phone,
        email,
        position,
        image: image,
      },
      { new: true }
    );

    res.json(updatedTeamMember);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteTeam = async (req, res) => {
  try {
    await TeamModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Team member deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Middleware for handling file uploads using multer
export const uploadImage = upload.single("image");
