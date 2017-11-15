"use strict";
// Seed file
// A program to insert new documents into the database on demand.
//
// Fixes a couple of problems:
// 1) You don't have to manually enter products when you delete them.
// 2) You can quickly get a lot of documents by running it multiple times.

// run the Mongoose setup code in our script
require("../config/mongoose-setup");


// import the celebs model to do product queries
const CelebertyModel = require("../models/celebrity-model");


const celebInfo = [
  {
    name: "Arnold Schwarzenegger",
    occupation: "Everything",
    catchPhrase: "If it bleeds, we can kill it."
  },

    {
    name: "Albert Einstein",
    occupation: "Genius",
    catchPhrase: "Try not to become a man of success, but rather try to become a man of value."
  },

  {
    name: "Elon Musk",
    occupation: "Genius",
    catchPhrase: "Work like hell. Put in 100 hours weeks every week. If others are putting in 40 hours and your putting in 100, even if your doing the same thing, you will achieve in 4 months what it takes them a year."
  }

];


CelebertyModel.create(celebInfo)
  .then((celebrityResults) => {
      console.log(`Inserted ${celebrityResults.length} celebs`);
  })
  .catch((err) => {
      console.log("Product insert error!");
      console.log(err);
  });