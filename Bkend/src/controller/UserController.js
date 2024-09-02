const userServices = require("../services/UserServices.js");

const userController = {
  createUser: async (req, res) => {
    try {
      const { name, email, phone } = req.body;

      // Validate input
      if (!name || !email || !phone) {
        return res.status(400).json({ message: "All fields are required." });
      }

      // Use userServices to create a new user
      const newUser = await userServices().createUser(name, email, phone);

      res
        .status(201)
        .json({ message: "User created successfully!", user: newUser });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await userServices().getAllUsers();
      res.json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

module.exports = userController;
