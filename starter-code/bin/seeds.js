const celebrities = [
  {
    name: "Michael Schumacher",
    occupation: "Formula One driver",
    catchPhrase: "Fast is not fast enough"
  },
  {
    name: "Bill Murray",
    occupation: "Actor",
    catchPhrase: "Live your day to the fullest"
  },
  {
    name: "Madonna",
    occupation: "Singer",
    catchPhrase: "Youth never ends"
  }
];

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mongoose-movies", () => {
  console.log("Connected to DB");
});

const Celebrity = require("../models/Celebrity");

Celebrity.collection.drop();

Celebrity.create(celebrities)
  .then(result => {
    console.log(`Created ${result.length} celebrities`);
  })
  .catch(err => {
    console.log(err);
  });