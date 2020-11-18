// To insert in "bin/seeds.js"
const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.model");

const DB_NAME = "starter-code";

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const celebrities = [
  {
    name: "Stone Cold Steve Austin",
    occupation: "Professional Wrestler",
    catchPhrase: "And that's the bottom line because Stone Cold said so!",
  },
  {
    name: "Ron Swanson",
    occupation: "City Manager",
    catchPhrase: "Any dog under fifty pounds is a cat and cats are useless.",
  },
  {
    name: "André de Albuquerque",
    occupation: "Web Developer",
    catchPhrase: "Can I get thumbs up?",
  },
];

Movie.create(celebrities)
  .then((celebritiesFromDB) => {
    console.log(`Created ${celebritiesFromDB.length} celebrities`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while creating movies from the DB: ${err}`)
  );
