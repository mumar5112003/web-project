import ServicesModel from "../models/services.js";

export const getServices = async (req, res) => {
  try {
    const ServicesMembers = await ServicesModel.find();

    res.json(ServicesMembers);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createServices = async (req, res) => {
  try {
    // Assuming 'price' is the key for the price data in the request body
    const { name, description, price } = req.body;

    // Convert the base64-encoded price to a buffer
    // const priceBuffer = Buffer.from(price.split(",")[1], "base64");

    // Create a new Services member with the price buffer
    if (req.userType === "admin") {
      const newServicesMember = await ServicesModel.create({
        name,
        description,
        price,
      });

      res.json(newServicesMember);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateServices = async (req, res) => {
  try {
    // Assuming 'price' is the key for the price data in the request body
    const { name, description, price } = req.body;

    // Convert the base64-encoded price to a buffer
    // const priceBuffer = Buffer.from(price.split(",")[1], "base64");

    // Update the Services member with the new price buffer
    if (req.userType === "admin") {
      const updatedServicesMember = await ServicesModel.findByIdAndUpdate(
        req.params.id,
        {
          name,
          description,

          price,
        },
        { new: true }
      );

      res.json(updatedServicesMember);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteServices = async (req, res) => {
  try {
    if (req.userType === "admin") {
      await ServicesModel.findByIdAndDelete(req.params.id);
      res.json({ message: "Services member deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
