const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongMovies', {useMongoClient: true});
const Celebrities = require('../models/celebrities');

const celebrities = [
  {   name: "Ana Jules",
      occupation : "Finding my passion path",
      catchPhrase : "Capaz que...",
  },
  {   name: "Juanan",
      occupation : "Cryptocurrency expert",
      catchPhrase : "Está cool!",
  }
];

// Celebrities.collection.drop();

Celebrities.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }
  //
  // docs.forEach((celebrities) => {
  //   console.log(celebrities.name)
  // });

  mongoose.connection.close();
});
