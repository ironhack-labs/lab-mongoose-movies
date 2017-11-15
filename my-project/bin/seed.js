// Seed file
// A program to insert new documents into the database on demand.


// run the Mongoose setup code in our script
require("../config/mongoose-setup");


// import the product model to do product queries
const CelebirtyModel = require("../models/celebrity.js");

const celebrityInfo = [
  {
    name: "Fuzzy Lumpkins",
    occupation: "Stuntman",
    catchPhrase: "That's not potato salad!"
  },
  {
    name: "Sofanda Cocks",
    occupation: "Professional Fluffer... of pillows.",
    catchPhrase: "There's more than one way to fluff..."
  },
  {
    name: "Anita Dick",
    occupation: "Professional Movie-Nun",
    catchPhrase: "Where's the bacon?"
  }
];

// db.celebrity.insertMany(celebrityInfo)
CelebirtyModel.create(celebrityInfo)
    .then((celebResults) => {
      console.log(`Inserted ${celebResults.length} celebrities`);
    })
    .catch((err) => {
      console.log("Celebrity insert ERROR!");
      console.log(err);
    });
