// UserController.js
const User = require("../models/userSchema"); // Ensure this path is correct

const createUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // Validate input
    if (!name || !email || !phone) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create a new user
    const newUser = new User({ name, email, phone });

    // Save user to database
    await newUser.save();

    res
      .status(201)
      .json({ message: "User created successfully!", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { createUser };
