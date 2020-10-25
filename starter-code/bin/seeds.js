const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

const dbName = "starter-code";
mongoose.connect(`mongodb://localhost/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const celebrities = [
  {
    name: "Harry Potter",
    occupation: "Auror",
    catchPhrase: "Expelliarmus",
  },
  {
    name: "Hermione Granger",
    occupation: "Ministry of Magic",
    catchPhrase: "Wingardium Leviosa",
  },
  {
    name: "Ron Weasley",
    occupation: "Auror",
    catchPhrase: "Stupefy",
  },
];

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close();
});