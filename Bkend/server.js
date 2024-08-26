const express = require("express");
const bodyParser = require("body-parser");
const dbConfig = require("./src/configuration/dbConfig");
const userRouter = require("./src/route/UserRoute");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());

// Connect to the database
dbConfig();

// Use the user router for handling user-related routes
app.use("/api", userRouter);

// Start the server after connecting to the database
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
