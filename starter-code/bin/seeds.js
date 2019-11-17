const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');
const Movie = require('../models/movie.model');

const dbName = 'celebrities-app-webmad1019';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [{
//       name: "Emilio Aragón",
//       occupation: "Humorista",
//       catchPhrase: "Hacer reir es divertido",
//     },
//     {
//       name: "El Fari",
//       occupation: "Cantante",
//       catchPhrase: "En qué melocotones me metes",
//     },
//     {
//       name: "Jose Luis Torrente",
//       occupation: "Investigador privado",
//       catchPhrase: "El fari es el mejor cantante del mundo",
//     }]

//     Celebrity.create(celebrities, (err) => {
//       if (err) {
//         throw (err)
//       }
//       console.log(`Created ${celebrities.length} celebrities`)
//       mongoose.connection.close();
//     })

    const movies = [{
        title: "Gran torino",
        genre: "Drama",
        plot: "gran película",
      },
      {
        title: "Torrente",
        genre: "Humor",
        plot: "el brazo tonto de la ley",
      },
      {
        title: "Star Wars",
        genre: "Ciencia ficcion",
        plot: "gran saga de películas",
      }
    ]

    Movie.create(movies, (err) => {
      if (err) {
        throw (err)
      }
      console.log(`Created ${movies.length} movies`)
      mongoose.connection.close();
    })