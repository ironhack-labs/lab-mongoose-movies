const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.model");

const DB_NAME = "starter-code";

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const celebs = [
  {
    name: "Arnold",
    occupation: "actor",
    catchPhrase: "I'll be back",
  },
  {
    name: "Matthew",
    occupation: "actor",
    catchPhrase: "Alright, alright, alright",
  },
  {
    name: "Brad",
    occupation: "actor",
    catchPhrase: "What's in the box?",
  },
];

Celebrity.create(celebs)
  .then((celebsToSeed) => {
    console.log(`DB seeded. Added ${celebsToSeed.length} items`);

    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`Unable to seed the DB. Following error occured ${err}`)
  );
