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
const nutrition = require("./router/imanRoutes");
const user = require("./router/user");
const weight = require("./router/weightRouter");

const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

const connectDB = require("./models/db");
const mongoURI = "mongodb://localhost:27017/nutrition";
connectDB(mongoURI);

// const store = new MongoDBStore({
//   uri: mongoURI,
//   collection: "currentSessions",
// })

// app.use(
//   session({
//     secret: "secret",
//     resave: false,
//     saveUninitialized: false,
//     store: store,
//     maxAge: 24 * 60 * 60 * 1000
//   })
// )

// ====================================
//              ROUTES
// ====================================

app.use("/nutrition", nutrition);
app.use("/nutrition/weight", weight);
app.use("/nutrition/user", user);


// ====================================
//                 PORT
// ====================================
const PORT = 5000;

app.listen(PORT, function () {
  console.log(`Server is running on Port:${PORT}`);
});
