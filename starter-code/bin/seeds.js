const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')

const dbName = 'celebrities'

mongoose.connect(`mongodb://localhost/${dbName}`)


// const celebrities = [
//   {
//     name : "Brendan Fraser",
//     occupation: "Actor",
//     catchPhrase: "oh my god"
//   },
//   {
//     name : "Rene Stiller",
//     occupation: "Astromático",
//     catchPhrase: "a huevo"
//   },
//   {
//     name : "BlisS",
//     occupation: "Dev",
//     catchPhrase: "polloyón"
//   }
// ];

// Celebrity.create(celebrities)
//     .then(celebrities=>{
//       console.log(`${celebrities.length} celebrities created`)
//       mongoose.connection.close()
//     })
//     .catch(err=>console.log('Something went wrong', err))

const movies = [
  {
    title : "Alice",
    genre: "Animation",
    plot: "A girl is lost in a wonderful world"
  },
  {
    title : "Le planete sauvage",
    genre: "Anime",
    plot: "Cruel alien world"
  },
  {
    title : "A clockwork orange",
    genre: "Distopian fiction",
    plot: "A man is brainwashed"
  },
];

Movie.create(movies)
    .then(movies=>{
      console.log(`${movies.length} movies created`)
      mongoose.connection.close()
    })
    .catch(err=>console.log('Something went wrong', err))