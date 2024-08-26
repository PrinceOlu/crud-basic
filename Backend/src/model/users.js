const { mongoose } = require("../configuration/dbConfig");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});

module.exports = mongoose.model("users", userSchema);
