 const mongoose = require("mongoose");
 const Movie = require('../models/Movies');
//const Celebrity = require("../models/Celebrity");

// const celebrities = [
//   {
//     name: "The Grinch",
//     occupation: "Que?",
//     catchPhrase: "Es porque soy verde"
//   },
//   {
//     name: "Dr. Malito",
//     occupation: "Villano",
//     catchPhrase: "No hay nada más patético que ver un hipster envejecer "
//   },
//   {
//     name: "Ace ventura",
//     occupation: "Detective de masctas",
//     catchPhrase:
//       "¿Quieres que cnvierta tu vida en un ifierno? -No estoy preparad para una relación pero gracias por preguntar"
//   }
// ];

const movies = [
  {
    title: "The lion king",
    genre: "Drama",
    plot:
      "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery."
  },
  {
    title: "Aladdin",
    genre: "Comedy",
    plot:
      "A kind-hearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true."
  },
  {
    title: "Pokémon: Detective Pikachu",
    genre: "Adventure",
    plot:
      "In a world where people collect Pokémon to do battle, a boy comes across an intelligent talking Pikachu who seeks to be a detective."
  }
];

mongoose
  .connect("mongodb://localhost/moviesdb", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

Movie.insertMany(movies);


