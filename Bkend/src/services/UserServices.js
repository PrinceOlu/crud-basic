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
      console.error("Error creating user:", error.message);
      // Re-throw the error to be handled by the caller
      throw new Error("Error creating user");
    }
  };

  const getAllUsers = async () => {
    try {
      // Retrieve all users from the database
      return await User.find();
    } catch (error) {
      console.error("Error fetching users:", error.message);
      // Handle the error gracefully
      throw new Error("Error fetching users");
    }
  };

  const getUserById = async (userId) => {
    try {
      // Retrieve user by ID from the database
      return await User.findById(userId);
    } catch (error) {
      console.error("Error fetching user by ID:", error.message);
      // Handle the error gracefully
      throw new Error("Error fetching user by ID");
    }
  };

  const updateUser = async (userId, updateData) => {
    try {
      // Retrieve user by ID from the database and update
      return await User.findByIdAndUpdate(userId, updateData, {
        new: true,
        runValidators: true, // Optional: ensure validation rules are applied
      });
    } catch (error) {
      console.error("Error updating user:", error.message);
      // Handle the error gracefully
      throw new Error("Error updating user");
    }
  };
  const deleteUser = async (userId) => {
    try {
      // Retrieve user by ID from the database
      return await User.findByIdAndDelete(userId);
    } catch (error) {
      console.error("Error fetching user by ID:", error.message);
      // Handle the error gracefully
      throw new Error("Error fetching user by ID");
    }
  };
  return {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
  };
};

module.exports = userServices;
