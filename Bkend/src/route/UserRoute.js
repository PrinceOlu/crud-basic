const express = require("express");
const userController = require("../controller/UserController");
const { body, validationResult } = require("express-validator");

const router = express.Router();

// Middleware to validate user data
const validateUser = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("phone").notEmpty().withMessage("Phone is required"),
];

// Error handling middleware
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// POST route for creating a user with validation
router.post(
  "/user",
  validateUser,
  handleValidationErrors,
  userController.createUser
);

// Additional routes (example)
router.get("/users", userController.getAllUsers);

module.exports = router;
