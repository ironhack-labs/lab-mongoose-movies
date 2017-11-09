const Celebrity = require("../models/celebrity").Celebrity;
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/movies-dev");

const celebrityData = [
  {
    name: "Clint Eastwood",
    occupation: "Actor",
    catchPhrase:
      "You see, in this world there’s two kinds of people, my friend: Those with loaded guns, and those who dig. You dig."
  },
  {
    name: "Bruce Willis",
    occupation: "Actor",
    catchPhrase: "Yippee-ki-yay, motherfucker!"
  },
  {
    name: "Nils Vogt",
    occupation: "Actor",
    catchPhrase: "NEI NEI NEI"
  }
];

Celebrity.create(celebrityData, function(err, docs) {
  if (err) {
    console.log(err);
  } else {
    console.log("Celebrity created!");
  }
  mongoose.disconnect();
});
