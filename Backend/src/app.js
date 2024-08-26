const express = require("express");
const { dbConfig } = require("./configuration/dbConfig");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");

// Establish the database connection
dbConfig();
app.use(bodyParser.json());
app.use(cors());

// app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
