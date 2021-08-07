const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

const DB_NAME = "lab-mongoose-movies";

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const celebrities = [
  { name: "Johnny Depp", occupation: "actor", catchPhrase: "Rum" },
  {
    name: "Al Pacino",
    occupation: "actor",
    catchPhrase: "sayhellotomylittlefriend",
  },
  { name: "Marlon Brando", occupation: "actor", catchPhrase: "noiwont" },
];

Celebrity.create(celebrities).then((celebs) => {
  console.log(`Created ${celebs.length} celebs`);

  // Once created, close the DB connection
  mongoose.connection.close();
});
