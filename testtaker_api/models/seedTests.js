//
//Fred Kaesmann
// Dec. 11,2019
// Final Project: Test Taker
//

const mongoose = require("mongoose");
const Tests = require("./testsModel");

const seedData = [
  {
    question:
      "Which of the following best describes the relationship between CobiT and ITIL?",
    answer1:
      "CobiT is a model for IT governance, whereas ITIL is a model for corporate governance.",
    answer2:
      "CobiT provides a corporate governance roadmap, whereas ITIL is a customizable framework for IT service management.",
    answer3:
      "CobiT defines IT goals, whereas ITIL provides the process-level steps on how to achieve them.",
    answer4:
      "CobiT provides a framework for achieving security goals, whereas ITIL defines a framework for achieving IT service-level goals.",
    correctAnswer: 3,
    details:
      "CobiT defines IT goals, whereas ITIL provides the process-level steps on how to achieve them."
  },
  {
    question:
      "Which of the following does not correctly describe a directory service?",
    answer1: "It manages objects within a directory by using namespaces.",
    answer2:
      "It enforces security policy by carrying out access control and identity management functions.",
    answer3:
      "It assigns namespaces to each object in databases that are based on the X.509 standard and are accessed by LDAP.",
    answer4:
      "It allows an administrator to configure and manage how identification takes place within the network.",
    correctAnswer: 3,
    details:
      "It assigns namespaces to each object in databases that are based on the X.509 standard and are accessed by LDAP. "
  },
  {
    question:
      "Lacys manager has tasked her with researching an intrusion detection system for a new dispatching center. Lacy identifies the top five products and compares their ratings. Which of the following are the evaluation criteria most in use today for these types of purposes?",
    answer1: "ITSEC",
    answer2: "Common Criteria",
    answer3: "Red Book",
    answer4: "Orange Book",
    correctAnswer: 2,
    details: "Common Criteria  "
  }
];

// Seeding function
const seedDB = () => {
  // Declare db name, URI, and instantiate connection
  // const dbName = "tests";
  // const dbURI = `mongodb://localhost:27017/${dbName}`;
  const dbConnection = mongoose.connection;

  //for Heroku Mongo DB
  const MONGODB_URI =
    process.env.MONGODB_URI || "mongodb://localhost:27017/tests";

  dbConnection.on("error", err => console.log("DB Connection Error: ", err));
  dbConnection.on("connected", () =>
    console.log("DB Connected to: ", MONGODB_URI)
  );
  dbConnection.on("disconnected", () => console.log("DB Disconnected"));

  // Connect to Mongo
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, () => {
    console.log("connected to mongo database");
  });
  // mongoose.connect(dbURI, { useNewUrlParser: true }, () =>
  //   console.log(`${dbName} db running on ${dbURI}`)
  // );

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
