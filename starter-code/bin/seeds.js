const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

Celebrity.collection.drop();
Movie.collection.drop();

const celebrities = [
  {
    name: "Jul",
    occupation: "Singer",
    catchPhrase: "Levage en moto, kalash dans l'auto",
  },
  {
    name: "Booba",
    occupation: "Singer",
    catchPhrase: "O.P j'suis dans le coin V.I.P du coin V.I.P",
  },
  {
    name: "Will Smith",
    occupation: "Actor",
    catchPhrase: "There’s no reason to have a plan B because it distracts from plan A.",
  },
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});

const movies = [
  {
    title: "Scarface",
    genre: "Action",
    plot: "In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
  },
  {
    title: "La Haine",
    genre: "Action",
    plot: "three young friends and their struggle to live in the banlieues of Paris. ",
  },
  {
    title: "Ratatouille",
    genre: "Comedy",
    plot: "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
  },
]

Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies in the database`)
  mongoose.connection.close()
});