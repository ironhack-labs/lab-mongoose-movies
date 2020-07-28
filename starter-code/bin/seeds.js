const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

const dbName = "starter-code";
mongoose.connect(`mongodb://localhost/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const celebrities = [
  {
    name: "Tom Cruise",
    occupation: "actor",
    catchPhrase: "mision imposible",
  },
  {
    name: "Beyonce",
    occupation: "singer",
    catchPhrase: "HALO",
  },
  {
    name: "Michael Jordan",
    occupation: "Basketballer",
    catchPhrase: "the last Dance",
  },
];

Celebrity.create(celebrities, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});
