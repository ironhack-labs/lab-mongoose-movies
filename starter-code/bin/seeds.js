const mongoose = require('mongoose');

//const Celeb = require('../models/Celebrity.model');
const Movie = require('../models/Movie.model');

const DB_NAME = 'starter-code';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// const stars = [
//     {
//         name: "Steven Seagal",
//         occupation: "actor",
//         catchPhrase: "never enough lame fight scenes"
//     },
//     {
//         name: "Chuck Norris",
//         occupation: "actor",
//         catchPhrase: "I'll kill death before it kills me"
//     },
//     {
//         name: "Jean-Claude Van Damme",
//         occupation: "actor",
//         catchPhrase: "if it fits, splits"
//     }
// ]


// Celeb.create(stars)
//   .then(celebs => {
//     console.log(`Created ${celebs.length} stars`);
//     mongoose.connection.close();
//   })
//   .catch(err => console.log(`An error occurred while creating celebrities in the DB: ${err}`));

const films = [
    {
        title: "Eyes wide shut",
        genre: "mystery thriller drama",
        plot: "A New York City doctor embarks on a harrowing, night-long odyssey of sexual and moral discovery after his wife reveals a painful secret to him."
    },
    {
      title: "A clockwork orange",
      genre: "crimi drama sci-fi",
      plot: "In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn't go as planned."
    },
    {
      title: "The shining",
      genre: "drama horror",
      plot: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future."
    }
]

Movie.create(films)
  .then(films => {
    console.log(`Created ${films.length} movies`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating movies in the DB: ${err}`));