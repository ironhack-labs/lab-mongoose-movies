const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.model");

const DB_NAME = "starter-code";

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const celebs = [
  {
    name: "Tom Hanks",
    occupation: "actor",
    catchPhrase: "Life is like a box of Chocolates",
  },
  {
    name: "Arnold schwarzenegger",
    occupation: "actor",
    catchPhrase: "I'll be back!",
  },
  {
    name: "Robin Williams",
    occupation: "comedian",
    catchPhrase:
      "You're only given a little spark of madness. You mustn't lose it.",
  },
];

Celebrity.create(celebs)
  .then(() => {
    console.log("Connected to database");

    mongoose.connection.close();
  })
  .catch((err) => console.log(`An error occurred ${err}`));
