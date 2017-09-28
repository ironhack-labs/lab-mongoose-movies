const mongoose = require('mongoose');
const Celebrity = require('../models/celebrities');
mongoose.connect('mongodb://localhost/movies');


const celebrities = [
  {
    name: "Alain Delon",
    occupation: "Actor",
    catchPhrase: "DELOOOOOON"
  },
  {
    name: "Hackerman",
    occupation: "Hacker",
    catchPhrase: "Let's get hackin, bitcheeees!"
  },
  {
    name: "Julianne Moore",
    occupation: "Best actress in the world",
    catchPhrase: "Hello, I am Julianne."
  }
];


Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    console.log(err);
  }
  docs.forEach(celebrity => console.log(celebrity.name));
  mongoose.disconnect();
});
