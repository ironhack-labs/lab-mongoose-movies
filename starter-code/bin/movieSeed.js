const mongoose = require("mongoose");
const Movie = require("../models/Movie");

const dbname = "starter-code";
mongoose.connect(`mongodb://localhost/${dbname}`);

const movies = [
  {
    title: "Estudiando duro estilo ironhacker",
    genre: "horror",
    plot:
      "mentes innocentes que entran en un establecimiento del Matadero llamado Ironhack"
  },
  {
    title: "Noha y sus cuentos chinos",
    genre: "comedia",
    plot: "Noha cunta cuntento raros"
  },
  {
    title: "Tino y la llamada del Zombie",
    genre: "adventura",
    plot: "Tino se va a un vije para convertirse en el primer Zombie"
  },
  {
    title: "Alessio y el juego",
    genre: "horror",
    plot:
      "Alessio tiene pesadillas de estar jugando y desperterse justo antes de ganar"
  },
  {
    title: "Comerse el elefante",
    genre: "Documentry",
    plot: "Paula enseña como se corta y  se come un elefante"
  },
  {
    title: "Sachin: el Rey de las fiestas",
    genre: "famtasia",
    plot: "sachin hace lo que siempre hace: montar un jaleo"
  }
];
Movie.create(movies)
  .then(moviesCreated => {
    console.log(`Added ${moviesCreated.length} movies`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`Error en seed: ${err}`));
