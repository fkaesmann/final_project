// DEPENDENCIES
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
// const cors = require("cors");

// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;

// MIDDLEWARE
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));

// - allow access from these URL's
const whitelist = [
  "http://localhost:3001",
  "*",
  "http://ftk-testtaker.herokuapp.com/",
  "https//ftk-testtaker.surge.sh/",
  "http//ftk-testtaker.surge.sh/",
  "https//ftk-testtaker.surge.sh",
  "http://ftk-testtaker.surge.sh",
  "https://ftk-testtaker.surge.sh/testtaker",
  "http://ftk-testtaker.surge.sh/testtaker"
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

const setHeaders = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https:ftk-testtaker.surge.sh/");
  res.header("Access-Control-Allow-Origin", "http://ftk-testtaker.surge.sh/");
  res.header(
    "Access-Control-Allow-Origin",
    "https://ftk-testtaker.surge.sh/testtaker"
  );
  res.header(
    "Access-Control-Allow-Origin",
    "http://ftk-testtaker.surge.sh/testtaker"
  );
  res.header("Content-Type", "application/json");
  res.headers("Access-Control-Allow-Origin", "*");
};
app.use(setHeaders);

app.use(express.json());
// app.use(cors(corsOptions));

// static files middleware
app.use(express.static(__dirname + "/public"));

// CONTROLLERS
const testController = require("./controllers/testtaker.js");
app.use("/testtaker", testController);

const Tests = require("./models/testsModel.js");

//Pull documents from database
app.get("/", (req, res) => {
  console.log("In server.js / ");
  Tests.find({}, (error, allTests) => {
    if (error) {
      res.send(error);
    } else {
      res.send(allTests);
    }
  });
});

// SEED ROUTE
// const seedTests = require("./models/seedTests.js");
// app.get("/testsSeed", (req, res) => {
//   // seeds the data
//   Tests.create(testSeed, (err, createdTestsItems) => {
//     console.log("In seedTests");
//     console.log("createdTestsItems =>", createdTestsItems);

//     res.redirect("/");
//   });
// });

// CONNECTIONS
app.listen(PORT, () => {
  console.log("listening on PORT: ", PORT);
});

//for Heroku Mongo DB
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/tests";

// mongoose.connect("mongodb://localhost:27017/booz");
// Connect to Mongo
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, () => {
  console.log("connected to mongo database");
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});
