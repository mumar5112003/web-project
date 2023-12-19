import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String, // Adding image as Buffer type
});

const PortfolioModel = mongoose.model("portfolio", portfolioSchema);

export default PortfolioModel;
