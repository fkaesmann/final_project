//Tests model

const mongoose = require("mongoose");

const testsSchema = new mongoose.Schema({
  question: String,
  answer1: { type: String, default: "Default answer 1" },
  answer2: { type: String, default: "Default answer 2" },
  answer3: { type: String, default: "Default answer 3" },
  answer4: { type: String, default: "Default answer 4" },
  correctAnswer: { type: Number, default: 1 },
  details: String
});

const Tests = mongoose.model("Tests", testsSchema);

module.exports = Tests;
