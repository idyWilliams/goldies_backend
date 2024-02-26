require("dotenv").config();
const express = require("express");
const expressLayout = require("express-layout");
const app = express();
const PORT = 5000 || process.env.PORT;
app.get("/", (req, res) => {
  res.send("Welcome");
});
// console.log(app)
app.listen(PORT, () => {
  console.log(PORT);
});
