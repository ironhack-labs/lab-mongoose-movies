const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

const celebrity = [
  {
    name: "Liam Gallagher",
    occupation: "singer",
    catchPhrase: "There' no rules."
  },
  {
    name: "Beyoncé",
    occupation: "singer",
    catchPhrase: "You're never too old to reinvent yourself"
  },
  {
    name: "Jean-Claude Vandamme",
    occupation: "actor",
    catchPhrase:
      "La plus belle religion qu'on puisse avoir, c'est de rentrer en soi-même et de digérer l'essence de la vie, se digérer soi-même et produire à partir de ça sa propre religion: l'instinct. Et l'aboutissement de l'instinct, c'est l'amour! Il faut apprendre à aimer. S'aimer d'abord soi-même pour pouvoir aimer les autres."
  }
];
mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

Celebrity.create(celebrity)
  .then(dbResult => {
    console.log("The celebrities have been inserted");
  })
  .catch(dbErr => console.log(dbErr));
