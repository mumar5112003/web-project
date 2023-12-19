import mongoose from "mongoose";

const ServicesSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: String, // Adding image as Buffer type
});

const ServicesModel = mongoose.model("Services", ServicesSchema);

export default ServicesModel;
