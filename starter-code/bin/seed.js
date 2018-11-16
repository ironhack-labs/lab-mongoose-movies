require("dotenv").config();
const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

mongoose
  .connect('mongodb://localhost/movies-celebrity', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })


// const celebritys = [
//   {
//     name: "Keanu Reeves",
//     occupation: "Actor",
//     catchPhrase: "La persona que estaba frenando mi felicidad era yo mismo. Cada día es valioso así que vamos a vivirlo así. El mañana no está garantizado, ¡así que vive hoy!"
//   },

//   {
//     name: "Matthew McConaughey",
//     occupation: "Actor",
//     catchPhrase: "La ley de Murphy no significa que vaya a pasar algo malo, sino que si algo puede pasar, pasará"  
//   },
//   {
//     name: "Edward Norton",
//     occupation: "Actor",
//     catchPhrase: "Cuando la gente cree que te estás muriendo es cuando en verdad te escuchan, en lugar de estar esperando su turno para hablar"
//   }
// ];


const movies = [
  {
    title: "Matrix",
    genre: "Ciencia ficcion",
    plot: "Un tio que toma una pastillita que le da un negro y derrepente resulta que vive en Matrix"
  },

  {
    title: "Insterstellar",
    genre: "Ciencia ficcion",
    plot: "La mejor pelicula de la historia, objetivamente hablando, un tio que pasea por el espacio para buscar otra casa para los demas"  
  },
  {
    title: "El club de la lucha",
    genre: "Clasico",
    plot: "Chavales que quedan para pegarse"
  }
];

Movie.collection.drop();

Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close()
});
