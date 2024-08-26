// UserRoute.js
const express = require("express");
const userController = require("../controller/UserController");

const router = express.Router();

// Define the POST route for creating a user
router.post("/user", userController.createUser);

module.exports = router;
