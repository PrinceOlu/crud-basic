// User.js
const mongoose = require("mongoose");

// Define the user schema using mongoose.Schema
const userSchema = new mongoose.Schema({
  name: { 
        type: String,
        required: true 
          },
  email: { 
         type: String, 
         required: true 
         },
  phone: { 
         type: String,
         required: true 
         },
});

// Create a model from the schema
const User = mongoose.model("User", userSchema);

// Export the model
module.exports = User;
