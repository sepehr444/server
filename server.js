const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const port = process.env.PORT;
let User = require("./models/user");
const { urlencoded } = require("express");
mongoose.connect(`mongodb://127.0.0.1:${port}/familyTree`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(urlencoded({ extended: false }));
async function getUsers() {
  return await User.find({});
}
app.post("/signup", async (req, res) => {
  let newUser = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
    father: req.body.father,
    mother: mother,
  });
  await newUser.save();
  res.json({
    user: await User.findOne({ password: req.body.password })._id,
    errror: null,
  });
});
app.get("/users", async (req, res) => {
  res.json({ users: await User.find({}) });
});
app.get("/user:id", async (req, res) => {
  res.json({ users: await User.find({ _id: req.params.id }) });
});
app.listen(port, () => {
  console.log("run in port : " + port);
});
