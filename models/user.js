const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = {
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String },
  fathers: { type: String, required: true },
  mothers: { type: String, required: true },
  partner: { type: String },
  brothers: { type: String },
  sisters: { type: String },
  boy: { type: String },
  girl: { type: String },
  phone: { type: String },
};
module.exports = mongoose.model("User", new Schema(userSchema), "User");
