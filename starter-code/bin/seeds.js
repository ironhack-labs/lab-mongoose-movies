const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.model");

const DB_NAME = "starter-code";

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const celebrities = [
  { name: "Donal Trump", occupation: "Golfer", catchPhrase: "Fake News!" },
  {
    name: "Angela Merkel",
    occupation: "Easty",
    catchPhrase: "Wir schaffen das",
  },
  {
    name: "Vladimir Putin",
    occupation: "Propogandist",
    catchPhrase: "We are under attack",
  },
];

Celebrity.create(celebrities)
  .then((celebritiesFromDB) => {
    console.log(`Created ${celebritiesFromDB.length} celebrities`);
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while getting movies from the DB: ${err}`)
  );
