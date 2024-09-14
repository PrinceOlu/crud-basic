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

// get all users
router.get("/users", userController.getAllUsers);
// get a single user
router.get("/users/:id", userController.getUserById);
// update single user
router.put("/users/:id", userController.updateUser);

// delete a single user
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
