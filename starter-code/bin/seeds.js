const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

const dbName = 'celebrity-project';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true });

const celebrities = [
  {
    name: "Michael Jackson",
    occupation: "singer",
    catchPhrase: "Ahhhhhhhhhhh"
  },
  {
    name: "Arnold Schwarzenegger",
    occupation: "actor",
    catchPhrase: "I'll be back"
  },
  {
    name: "Michael Schumacher",
    occupation: "unknown",
    catchPhrase: "Brumm Brumm"
  }
];

const movies = [
  {
    title: "A great day",
    genre: "Drama",
    plot: "A great day turns into a bad day and into a great day again!"
  },
  {
    title: "Love & Roses",
    genre: "Action",
    plot: "Two lovers fight a lot"
  },
  {
    title: "Humanity",
    genre: "Documentation",
    plot: "Always look on the bright side of live"
  },
];

Celebrity.deleteMany()
  .then ( () => {
    Celebrity.create(celebrities, (err) => {
      if (err) { throw(err); }
      console.log(`Created ${celebrities.length} Celebrities`);
    });
  })
  .catch(err => {
    console.log(err);
  })

.then (() => {
    Movie.deleteMany()
    .then ( () => {
      Movie.create(movies, (err) => {
      if (err) { throw(err); }
      console.log(`Created ${movies.length} Movies`);
      mongoose.connection.close();
      });
    })
    .catch(err => {
      console.log(err);
    });
  });