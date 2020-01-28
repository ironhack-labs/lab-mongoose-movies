const Celebrity = require("../models/Celebrity");
const connection = require("../connection-db");

const celebrities = [
  {
    name: "Leonardo Da Vinci",
    catchPhrase: "La pintura es poesia muda, la poesia pintura ciega"
  },
  {
    name: "Edsger Dijkstra",
    occupation: "Scientific",
    catchPhrase: "Es tarea del profesor el motivar a sus estudiantes"
  },
  {
    name: "Quentin Tarantino",
    occupation: "Film Director",
    catchPhrase: "No fui a ninguna escuela de cine, solo fui al cine"
  }
];

connection(async () => {
  await Celebrity.collection.drop();
  await Celebrity.create(celebrities);
});
