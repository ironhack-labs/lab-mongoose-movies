const mongoose = require("mongoose");
const MovieModel = require("../models/Movies.js");

//console.log('in seeds.js file');

mongoose
  .connect('mongodb://localhost/starter-code', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });


// // uncomment to seed again the db for the first time
// const celebrities = [{
//     name: "Chris Martin",
//     occupation: "Singer",
//     catchPhrase: "Viva la Vida"
//   },
//   {
//     name: "Hayao Miyazaki",
//     occupation: "Animator",
//     catchPhrase: "J'ai fait une belle ballade !"
//   },
//   {
//     name: "Cillian Murphy",
//     occupation: "Actor",
//     catchPhrase: "There is God and there is the Peaky Blinders"
//   }
// ];

// CelebrityModel.create(celebrities)
//   .then(dbResult => {
//     console.log("the celebrities have been inserted !");
//   })
//   .catch(dbErr => console.log(dbErr));

const movies = [{
    title: "le voyage de Chihiro",
    genre: "anime",
    plot: "little girl have to find her parents"
  },
  {
    title: "lord of the rings",
    genre: "fantasy",
    plot: "destroy the ring"
  },
  {
    title: "Love Actually",
    genre: "Romantic Comedy",
    plot: "love story of differents people"
  },

];

MovieModel.create(movies)
  .then(dbResult => {
    console.log("the movies have been inserted !");
  })
  .catch(dbErr => console.log(dbErr));