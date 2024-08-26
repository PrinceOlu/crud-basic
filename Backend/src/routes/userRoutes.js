const express = require("express");
const UserController = require("../controllers/userController");
const router = express.Router();

router.post("/", UserController.createNewUser);
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById); // Route for getting a user by ID
router.put("/:id", UserController.updateUserById);
router.delete("/:id", UserController.deleteUserById);

module.exports = router;
