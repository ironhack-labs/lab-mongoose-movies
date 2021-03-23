const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

const DB_NAME = "lab-mongoose-movies";

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const celebrities = [
  {
    name: "The Rock",
    occupation: "unknown",
    catchPhrase: "If you smeeeeeeelllll what the Rock is cookin'",
  },
  {
    name: "Jim Jones",
    occupation: "singer",
    catchPhrase: "We balliiiiiiinnnnnn'",
  },
  {
    name: "Bill Engvall",
    occupation: "comedian",
    catchPhrase: "Here's your sign...",
  },
];

Celebrity.create(celebrities)
  .then((celebritiesFromDB) => {
    console.log(`Yay, ${celebritiesFromDB.length} celebrities have been added!`);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("It did not work. :'(", err);
  });
