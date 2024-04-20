const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const UserRoutes = require("./Routes/UserRoutes");
require("dotenv").config();

// INITIALIZE EXPRESS
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use("/api/auth", UserRoutes);

// DB CONNECTION
mongoose
  .connect(process.env.Mongo_URI)
  .then(() => console.log("DB connected successfully!"))
  .catch((err) => console.error(`DB Error: ${err}`));

// EXPORT MODULE
module.exports = app;
