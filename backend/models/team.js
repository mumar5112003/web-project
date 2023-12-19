import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: String,
  age: Number,
  phone: String,
  email: String,
  position: String,
  image: String, // Adding image as Buffer type
});

const TeamModel = mongoose.model("Team", teamSchema);

export default TeamModel;
