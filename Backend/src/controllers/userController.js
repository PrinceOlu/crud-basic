const UserService = require("../services/userService");

class UserController {
  async createNewUser(req, res) {
    try {
      const { name, email, phone } = req.body;
      const savedUser = await UserService.createNewUser(name, email, phone);
      res.status(201).json(savedUser); // Send 201 status for created resource
    } catch (err) {
      console.error("Error creating new user:", err);
      res.status(500).send({ error: err.message });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users); // Send 200 status for successful retrieval
    } catch (err) {
      console.error("Error fetching users:", err);
      res.status(500).send({ error: err.message });
    }
  }

  async getUserById(req, res) {
    const userId = req.params.id; // Assuming you're using URL parameters
    try {
      const user = await UserService.getUserById(userId);
      if (user) {
        res.status(200).json(user); // Send 200 status for successful retrieval
      } else {
        res.status(404).send({ error: "User not found" }); // Send 404 if user not found
      }
    } catch (err) {
      console.error("Error fetching user:", err);
      res.status(500).send({ error: err.message });
    }
  }

  async updateUserById(req, res) {
    const userId = req.params.id; // Assuming you're using URL parameters
    const { name, email, phone } = req.body; // The data to update the user with
    try {
      const updatedUser = await UserService.updateUserById(
        userId,
        name,
        email,
        phone
      );
      if (updatedUser) {
        res.status(200).json(updatedUser); // Send 200 status for successful update
      } else {
        res.status(404).send({ error: "User not found" }); // Send 404 if user not found
      }
    } catch (err) {
      console.error("Error updating user:", err);
      res.status(500).send({ error: err.message });
    }
  }
  // Method to delete a single user
  async deleteUserById(req, res) {
    const userId = req.params.id; // Assuming you're using URL parameters
    try {
      const deletedUser = await UserService.deleteUserById(userId);
      if (deletedUser) {
        res.status(200).json(deletedUser); // Send 200 status for successful deletion
      } else {
        res.status(404).send({ error: "User not found" }); // Send 404 if user not found
      }
    } catch (err) {
      console.error("Error deleting user:", err);
      res.status(500).send({ error: err.message });
    }
  }
}
module.exports = new UserController();
