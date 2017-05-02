const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/celebrities');

const Celebrity = require('../models/celebrity.js');


const celebrities = [
  {
    name: "Arnold Schwarzenegger",
    occupation: "Retired",
    catchPhrase: "I'll be back"
  },
  {
    name: "DJ Khaled",
    occupation: "Producer",
    catchPhrase: "They don't want you..."
  },
  {
    name: "Leo Di Caprio",
    occupation: "Actor",
    catchPhrase: "Gentlemen, you had my curiosity, but now you have my attention"
  }
];

Celebrity.create(celebrities, (err, moviesCelebs) => {
  if (err) {
    throw err;
  }

  moviesCelebs.forEach((oneCelebrity) => {
    console.log(`New celebrity ${oneCelebrity.name} - >${oneCelebrity._id}`);
  });
  mongoose.disconnect();
});
