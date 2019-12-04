const mongoose = require("mongoose");
const celebrity = require("../models/celebrity");

mongoose.connect("mongodb://localhost/starter-code");

const seed = [
  {
    name: "David Harbour",
    occupation: "Actor",
    catchPhrase: "When did I get famous?"
  },
  {
    name: "BoJack Horseman",
    occupation: "Actor",
    catchPhrase: "Yes, I am The BoJack Horseman"
  },
  {
    name: 'Dwayne "The Rock" Johnson',
    occupation: "Actor",
    catchPhrase: "Do you smelllllllllll... what The Rock... is cooking"
  }
];

celebrity.insertMany(seed, function() {
  // db.close();
});
