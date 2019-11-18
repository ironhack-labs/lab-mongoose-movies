const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');
const Movie = require('../models/movie.model');

const dbName = 'daily-app-webmad1019';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Germán Álvarez",
    occupation: "Lead Teacher Web Development",
    catchPhrase: "Tres, dos, uno... Party",
  },
  {
    name: "Diego Pablo Simeone",
    occupation: "Trainer",
    catchPhrase: "Partido a partido",
  },
  {
    name: "David Schwimmer",
    occupation: "Actor",
    catchPhrase: "We were on a break",
   }
]

const movies = [
  {
    title: "Matrix",
    genre: "Science Fiction",
    plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
  },
  {
    title: "V for Vendetta",
    genre: "Action",
    plot: "In a future British tyranny, a shadowy freedom fighter, known only by the alias of V, plots to overthrow it with the help of a young woman.",
  },
  {
    title: "The Rock",
    genre: "Action Thriller",
    plot: "A mild-mannered chemist and an ex-con must lead the counterstrike when a rogue group of military men, led by a renegade general, threaten a nerve gas attack from Alcatraz against San Francisco.",
   }
]



Celebrity.create(celebrities, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});

Movie.create(movies, (err) => {
    if (err) {throw (err) }
    console.log(`Created ${movies.length} movies`)
    mongoose.connection.close()
})