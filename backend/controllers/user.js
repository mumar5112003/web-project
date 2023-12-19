// import bcrypt from "bcryptjs";
// import User from "../models/user.js";

// export const signin = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });

//     if (!existingUser)
//       return res.status(404).json({ message: "User doesn't exist." });

//     const isPasswordCorrect = await bcrypt.compare(
//       password,
//       existingUser.password
//     );

//     if (!isPasswordCorrect)
//       return res.status(400).json({ message: "Wrong Credentials" });

//     // No token generation for signin
//     res.status(200).json({ result: existingUser });
//   } catch (error) {
//     res.status(500).json({ message: "Something went wrong!" });
//   }
// };

// export const signup = async (req, res) => {
//   const { email, password, confirmPassword, firstName, lastName } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });

//     if (existingUser)
//       return res.status(404).json({ message: "User already exists." });

//     if (password !== confirmPassword)
//       return res.status(404).json({ message: "Passwords don't match." });

//     const hashedPassword = await bcrypt.hash(password, 12);
//     const result = await User.create({
//       email,
//       password: hashedPassword,
//       name: `${firstName} ${lastName}`,
//     });

//     // No token generation for signup
//     res.status(200).json({ result });
//   } catch (error) {
//     res.status(500).json({ message: "Something went wrong!" });
//   }
// };

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Wrong Credentials" });
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "aestechs",
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(404).json({ message: "User already exist." });

    if (password !== confirmPassword)
      return res.status(404).json({ message: "Passwords don't match." });

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });
    const token = jwt.sign(
      { email: result.email, id: result._id },
      "aestechs",
      { expiresIn: "1h" }
    );
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};
