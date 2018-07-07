require("dotenv").config();

const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

const dbUrl = process.env.DBURL;

mongoose.Promise = Promise;
mongoose
  .connect( dbUrl, { useMongoClient: true })
  .then(() => {
    console.log("Connected to Mongo!");

    const celebrities = [
      {
        name: "Jude Law",
        occupation: "actor",
        catchPhrase: "I don't want to do anything that I'm not passionate about."
      },
      {
        name: "James Bay",
        occupation: "singer",
        catchPhrase: "The world will turn and we'll grow, we'll learn."
      },
      {
        name: "Taylor Swift",
        occupation: "singer",
        catchPhrase: "Just be yourself, there is no one better."
      }
    ];

    Celebrity.collection.drop();

    Celebrity.create(celebrities)
      .then((data) => {
        console.log(`${data.length} celebrities created.`);

        mongoose.disconnect();
      })
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
