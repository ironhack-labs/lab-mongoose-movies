const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MongoMovies');

const Celebrity = require('../models/celebrity');

let seeds = [
  {
    name: "Ben Affleck",
    ocupation: "Actor",
    catchPhrase: "Hello, I'm Ben and I like turtles.",
  },
  {
    name: "Natalie Portman",
    ocupation: "Actor",
    catchPhrase: "Nyeeeee!!!!",
  },
  {
    name: "Ringo Star",
    ocupation: "Musician",
    catchPhrase: "Your life looks like a yellow submarine",
  },

];


Celebrity.create(seeds, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((product) => {
    console.log(product.name);
  });
  mongoose.connection.close();
});