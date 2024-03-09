const mongoose = require("mongoose");
require("dotenv").config();

const DB = process.env.URI;

mongoose
  .connect(
    "mongodb+srv://rey:123@cluster0.gtmbukp.mongodb.net/BestBid?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((x) => {
    console.log("Connected to Mongo!");
  })
  .catch((err) => {
    console.log("Error while connecting to Mongo!");
  });
