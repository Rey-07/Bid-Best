const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary");

const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const uuid = require("uuid");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;
const PORT = 5000;

require("./db/conn");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// const User = require('./model/userSchema');
// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(fileUpload());
const corsOption = {
  origin: "http://localhost:3000",
  methods: "GET, POST, PUT, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOption));
// HANDLING UNCAUGHT EXCEPTION -> CONSOLE.LOG(UNDEFINE VARIABLE)
process.on("uncaughtException", (err) => {
  console.log(`Error : ${err}`);
  console.log(` Server is closing due to Handling Uncaught Error Exception`);
});

// ROUTERS
app.use(require("./router/auth"));
app.use(require("./router/productRoute"));

// MIDDLEWARE FOR ERRORS
app.use(require("./middleware/error"));


const server = app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

// UNHANDLED PROMISE REJECTION ->> IF .ENV CONFIG FILE CHANGE
process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err.message}`);
  console.log(
    `Config file problem sutting down server due to unhandled promise rejection`
  );

  server.close(() => {
    process.exit(1);
  });
});
