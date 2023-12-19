import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/users.js";
import projectRoutes from "./routes/projects.js";
import teamRoutes from "./routes/team.js";
import portfolioRoutes from "./routes/portfolio.js";
import servicesRoutes from "./routes/services.js";
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://mumar00360:123@cluster0.wkrpmas.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(console.log("connected"));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/users", userRoutes);
app.use("/projects", projectRoutes);
app.use("/team", teamRoutes);
app.use("/portfolio", portfolioRoutes);
app.use("/services", servicesRoutes);
// Routes
app.get("/", (req, res) => {
  res.send("App is running!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
