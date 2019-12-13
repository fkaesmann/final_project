//
//Fred Kaesmann
// Dec. 11,2019
// Final Project: Test Taker
//

const mongoose = require("mongoose");
const Tests = require("./testsModel");

const seedData = [
  {
    question: "Did the seed work with new way?",
    answer1: "Yes",
    answer2: "No",
    answer3: "Maybe",
    answer4: "Uh, sure",
    correctAnswer: 1,
    details: "Hopefully it worked"
  }
];

// Seeding function
const seedDB = () => {
  // Declare db name, URI, and instantiate connection
  const dbName = "tests";
  const dbURI = `mongodb://localhost:27017/${dbName}`;
  const dbConnection = mongoose.connection;

  dbConnection.on("error", err => console.log("DB Connection Error: ", err));
  dbConnection.on("connected", () => console.log("DB Connected to: ", dbURI));
  dbConnection.on("disconnected", () => console.log("DB Disconnected"));

  mongoose.connect(dbURI, { useNewUrlParser: true }, () =>
    console.log(`${dbName} db running on ${dbURI}`)
  );

  // Tests.collection.drop()
  Tests.create(seedData, (err, newTests) => {
    if (err) {
      console.log("Seeding error: ", err);
    } else {
      console.log("Seeding OK: ", newTests);
    }
    dbConnection.close();
  });
};

seedDB();

// let testsSeed = [
//   {
//     question: "What is your name?",
//     answer1: "Answer 11",
//     answer2: "Fred",
//     answer3: "Answer 33",
//     answer4: "Answer 44",
//     correctAnswer: 2,
//     details: "The answer is Fred, because that is my name"
//   }
// ];

// module.exports = testsSeed;
