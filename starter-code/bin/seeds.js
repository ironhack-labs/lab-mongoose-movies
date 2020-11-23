
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie')

const DB_NAME = 'lab-mongoose-movies';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// const celebs = [
//     { name: 'Arnold Schwarzenegger', occupation: 'Actor', catchPhrase: "I'll be back!"},
//     { name: 'Zlatan Ibrahimovic', occupation: 'Football Player', catchPhrase: "I can’t help but laugh at how perfect I am." },
//     { name: 'Sheldon Cooper', occupation: "Smartass", catchPhrase: "Bazinga!" }
//   ];

// Celebrity.create(celebs)
//     .then(celebritiesFromDb => {
//         console.log(`Created ${celebritiesFromDb.length} celebrities`);
//         mongoose.connection.close();
//     })
//     .catch(err => console.log(`An error occurred while creating celebrities from the DB: ${err}`));

const movies = [
    { title: 'Shaving Ryans Privates', genre: 'XXX', plot: "A chef, who tends to favor head over heart."},
    { title: 'Austin Powers', genre: 'Comedy', plot: "It's a spy story about good versus evil. It kicks off in a summer house with a missing child." },
    { title: 'Star Wars', genre: "Sci-fi", plot: "It's a post-apocalyptic story about the individual versus collective identity. It kicks off in Africa with with the sentence: 'It had arrived.'" }
  ];
    
Movie.create(movies)
  .then(moviesFromDb => {
      console.log(`Created ${moviesFromDb.length} movies`);
      mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating celebrities from the DB: ${err}`));
