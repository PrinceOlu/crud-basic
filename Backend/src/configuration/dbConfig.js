const mongoose = require("mongoose");

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
    console.log("Error while connecting to database:", error);
  }
};

module.exports = { mongoose, dbConfig };
