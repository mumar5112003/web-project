import PortfolioModel from "../models/portfolio.js";
import multer from "multer";

const storage = multer.memoryStorage(); // Store files in memory as buffers
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // Increase the size limit to 10 MB or adjust as needed
  },
});

export const getPortfolio = async (req, res) => {
  try {
    const PortfolioMembers = await PortfolioModel.find();

    res.json(PortfolioMembers);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createPortfolio = async (req, res) => {
  try {
    // Assuming 'image' is the key for the image data in the request body
    const { title, description, image } = req.body;

    // Convert the base64-encoded image to a buffer
    // const imageBuffer = Buffer.from(image.split(",")[1], "base64");

    // Create a new Portfolio member with the image buffer
    const newPortfolioMember = await PortfolioModel.create({
      title,
      description,
      image,
    });

    res.json(newPortfolioMember);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updatePortfolio = async (req, res) => {
  try {
    // Assuming 'image' is the key for the image data in the request body
    const { title, description, image } = req.body;

    // Convert the base64-encoded image to a buffer
    // const imageBuffer = Buffer.from(image.split(",")[1], "base64");

    // Update the Portfolio member with the new image buffer
    const updatedPortfolioMember = await PortfolioModel.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,

        image: image,
      },
      { new: true }
    );

    res.json(updatedPortfolioMember);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deletePortfolio = async (req, res) => {
  try {
    await PortfolioModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Portfolio member deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Middleware for handling file uploads using multer
export const uploadImage = upload.single("image");
