const User = require("../models/userSchema");

const userServices = () => {
  const createUser = async (name, email, phone) => {
    try {
      // Create a new User instance
      const newUser = new User({ name, email, phone });

      // Save the new user to the database
      await newUser.save();

      console.log("User created successfully");
      // Return the created user
      return newUser;
    } catch (error) {
      console.error("Error creating user:", error);
      // Re-throw the error to be handled by the caller
      throw new Error("Error creating user");
    }
  };

  const getAllUsers = async () => {
    try {
      // Retrieve all users from the database
      return await User.find();
    } catch (error) {
      console.error("Error fetching users:", error);
      // Handle the error gracefully
      throw new Error("Error fetching users");
    }
  };

  return {
    createUser,
    getAllUsers,
  };
};

module.exports = userServices;
