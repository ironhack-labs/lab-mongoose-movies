// const mongoose = require("mongoose");
// const Celebrity = require("../models/celebrity.model");

// const dbtitle = "celeb-populated";
// mongoose.connect(`mongodb://localhost/${dbtitle}`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// Celebrity.collection.drop();

// const celebrities = [
//   {
//     name: "Cintia Lund",
//     occupation: "Cantante y compositora",
//     catchPhrase: "Un clásico nunca pasa de moda",
//   },
//   {
//     name: "María Talaverano",
//     occupation: "Artista bidisciplinar",
//     catchPhrase: "Cutrona but pro",
//   },
//   {
//     name: "Mai-Cas",
//     occupation: "Diseñadora de interiores",
//     catchPhrase: "Y yo por qué no estoy invitada",
//   },
// ];

// Celebrity.create(celebrities)

//   .then((everyCelebrity) =>
//     console.log("Ahora tenemos", everyCelebrity.length, "famosos")
//   )

//   .catch((err) => console.log("ERROR: ", err));
//------------

const mongoose = require("mongoose");
const Movie = require("../models/movie.model");

const dbtitle = "movies-populated";
mongoose.connect(`mongodb://localhost/${dbtitle}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Movie.collection.drop();

const movies = [
  {
    title: "Bob",
    genre: "Terror",
    plot: "Weird things happen to Bob",
  },
  {
    title: "Nancy",
    genre: "Terror",
    plot: "Weird things happen to Nancy",
  },
  {
    title: "Jen",
    genre: "Comedy",
    plot: "Jen makes Nancy and Bob think they're going crazy",
  },
];

Movie.create(movies)

  .then((everyMovie) =>
    console.log("Ahora tenemos", everyMovie.length, "pelis")
  )

  .catch((err) => console.log("ERROR: ", err));
