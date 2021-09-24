// ====================================
//          DEPENDENCIES
// ====================================

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ====================================
//          CONNECT TO MONGO
// ====================================

//Use MongoAtlas
const mongoose = require("mongoose");
// const nutrition = require("./models/nutrition");

const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

const connectDB = require("./models/db");
const mongoURI = "mongodb://localhost:27017/nutrition";
connectDB(mongoURI);

// ====================================
//              ROUTES
// ====================================

// app.use("/nutrition", nutrition);
// app.use("/login", toDo);

// ====================================
//                 PORT
// ====================================
const PORT = 5000;

app.listen(PORT, function () {
  console.log(`Server is running on Port:${PORT}`);
});
