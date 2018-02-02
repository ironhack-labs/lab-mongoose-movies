const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mangoose-movies");
const Celebrity = require("../models/celebrity");

const celebrities = [
  {
    name: "Beyoncé Knowles",
    occupation: "Singer",
    catchPhrase: "If I were a boy..."
  },
  {
    name: "Donald Trump",
    occupation: "President of the United States",
    catchPhrase: "Let's build that fucking wall!"
  },
  {
    name: "Robert DeNiro",
    occupation: "Actor",
    catchPhrase: "You fucked my wife?"
  }
];

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach(celebrity => {
    console.log(celebrity.name);
  });
  mongoose.connection.close();
});
