const userServices = require("../services/UserServices.js")();

const userController = {
  createUser: async (req, res) => {
    try {
      const { name, email, phone } = req.body;

      // Validate input
      if (!name || !email || !phone) {
        return res.status(400).json({ message: "All fields are required." });
      }

      // Use userServices to create a new user
      const newUser = await userServices.createUser(name, email, phone);

      res
        .status(201)
        .json({ message: "User created successfully!", user: newUser });
    } catch (error) {
      console.error("Error creating user:", error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await userServices.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error("Error fetching users:", error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  getUserById: async (req, res) => {
    try {
      const { id } = req.params;

      // Fetch user by ID
      const user = await userServices.getUserById(id);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json(user);
    } catch (error) {
      console.error("Error fetching user by ID:", error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body; // Get update data from the request body

      // Validate input (optional)
      if (!updateData || Object.keys(updateData).length === 0) {
        return res.status(400).json({ message: "No update data provided." });
      }

      // Update user
      const updatedUser = await userServices.updateUser(id, updateData);

      if (!updatedUser) {
        return res
          .status(404)
          .json({ message: "User not found or not updated" });
      }

      res.json({ message: "User updated successfully!", user: updatedUser });
    } catch (error) {
      console.error("Error updating user by ID:", error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;

      // delete user by ID
      const deletedUser = await userServices.deleteUser(id);

      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json(deletedUser);
    } catch (error) {
      console.error("Error deleting user by ID:", error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

module.exports = userController;
