const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

const dbName = "ironhack";
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Riles",
    occupation: "Rapper",
    catchPhrase: "I'm making pesetas."
  },
  {
    name: "Eminem",
    occupation: "Rapper",
    catchPhrase: "Hailey I know u miss ur mom."
  },
  {
    name: "Russ",
    occupation: "Rapper",
    catchPhrase: "Ride slow."
  }
];

Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});
