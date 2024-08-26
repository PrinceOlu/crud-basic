const User = require("../models/userSchema"); // Correctly import the User model

class UserServices {
  // Asynchronous method to create a new user
  async createUser(name, email, phone) {
    try {
      // Create a new User instance
      const newUser = new User({ name, email, phone });
      // Save the new user to the database
      await newUser.save();
      console.log("User created successfully");
      return newUser; // Optionally return the created user
    } catch (error) {
      // Log any errors that occur
      console.error("Error creating user:", error);
      throw error; // Re-throw the error for further handling
    }
  }
}

// Correct the export statement
module.exports = new UserServices();
