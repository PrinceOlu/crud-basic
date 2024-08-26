const User = require("../model/users"); // Ensure this matches the actual model file name

class UserService {
  // Method to create a new user
  async createNewUser(name, email, phone) {
    try {
      const newUser = new User({
        name,
        email,
        phone,
      });
      const result = await newUser.save();
      return result;
    } catch (err) {
      console.error("Error creating new user:", err);
      throw new Error("Error creating new user");
    }
  }

  // Method to fetch all users
  async getAllUsers() {
    try {
      return await User.find();
    } catch (err) {
      console.error("Error fetching users:", err);
      throw new Error("Error fetching users");
    }
  }

  // Method to fetch a single user
  async getUserById(userid) {
    try {
      return await User.findById(userid);
    } catch (err) {
      console.error("Error fetching user by ID:", err);
      throw new Error("Error fetching user by ID");
    }
  }

  // Method to update a user
  async updateUserById(userid, name, email, phone) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        userid,
        { name, email, phone },
        { new: true }
      );
      return updatedUser;
    } catch (err) {
      console.error("Error updating user:", err);
      throw new Error("Error updating user");
    }
  }
  // Method to delete a single user
  async deleteUserById(userid) {
    try {
      return await User.findByIdAndDelete(userid);
    } catch (err) {
      console.error("Error deleting user by ID:", err);
      throw new Error("Error deleting user by ID");
    }
  }
}

module.exports = new UserService();
