const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");

const celebrities = [
  {
    name: "Sheldon Cooper",
    occupation: "unknown",
    catchPhrase: "Bazinga!",
  },
  {
    name: "Paris Hilton",
    occupation: "unknown",
    catchPhrase: "That's Hot",
  },
  {
    name: "Beyonce",
    occupation: "singer",
    catchPhrase: "Like this (I woke up)",
  },
];

const movies = [
  {
    title: "El padrino",
    genre: "action",
    plot:
      "Don Vito Corleone (Marlon Brando) es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York.",
  },
  {
    title: "Breaking Bad",
    genre: "adventure",
    plot:
      "Tras cumplir 50 años, Walter White (Bryan Cranston), un profesor de química de un instituto de Albuquerque",
  },
  {
    title: "La lista de Schindler",
    genre: "fantasy",
    plot:
      "Un empresario alemán de gran talento para las relaciones públicas, busca ganarse la simpatía de los nazis",
  },
];

mongoose
  .connect("mongodb://localhost/celebrities-app")
  .then(() => {
    console.log("Connected to database");

    Movie.create(movies).then((movies) => {
      console.log(movies);
    });
  })
  .catch((err) => {
    console.error(err);
  });
