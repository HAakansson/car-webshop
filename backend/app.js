// ########## Database Setup ##########
const mongoose = require("mongoose");
const url =
  "mongodb+srv://niklas:nodehill@cluster0.yffxj.mongodb.net/carWebshop?retryWrites=true&w=majority";
const params = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(url, params)
  .then(() => console.log("Connected to database"))
  .catch((err) =>
    console.error(`An error ocurred connecting to the database. \n${err}`)
  );

// ########## App Setup ##########
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
