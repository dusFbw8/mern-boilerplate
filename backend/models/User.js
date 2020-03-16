
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  authId:       { type: String, index: { unique: true } },
  group:        { type: Array,  default: [] },
  name:         { type: String, required: true },
  email:        { type: String, required: true },
  profileImage: { type: String, required: false },
  password:     { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
  userSchema
}
