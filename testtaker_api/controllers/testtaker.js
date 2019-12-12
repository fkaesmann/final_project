// DEPENDENCIES
const express = require("express");
const tests = express.Router();
const Tests = require("../models/testsModel");

//Get all
tests.get("/", (req, res) => {
  console.log("in controller testtaker.js");
  Tests.find({}, (err, foundTests) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundTests);
  });
});

//Create
tests.post("/", (req, res) => {
  console.log("In post for testtaker");
  Tests.create(req.body, (error, createdtest) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).send(createdtest);
  });
});

//Delete
tests.delete("/:id", (req, res) => {
  console.log("In testtaker delete /id", req.params.id);
  Tests.findByIdAndRemove(req.params.id, (err, deletedTests) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(deletedTests);
  });
});

//Update
tests.put("/:id", (req, res) => {
  console.log("In testtaker put /id", req.params.id);
  Tests.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedTests) => {
      if (err) {
        console.log("Put error ", err.message);
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(updatedTests);
      console.log("Put good updatedTests = ", updatedTests);
    }
  );
});

module.exports = tests;
