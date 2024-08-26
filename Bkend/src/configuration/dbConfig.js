// dbConfig.js
const mongoose = require("mongoose");

// Use an async function to connect to the database
const dbConfig = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://ojugbeleolusegun:wNjrUe0sC0ERZpbB@mern-cluster0.7hdkpgd.mongodb.net/crud_basic`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to database");
  } catch (error) {
    console.error("Error while connecting to database:", error);
  }
};

// Export the database configuration function
module.exports = dbConfig;
