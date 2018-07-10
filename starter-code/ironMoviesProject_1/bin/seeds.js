require("dotenv").config();

const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");


const dbName = process.env.DBURL;
mongoose.connect(dbName);
const celebrities = [
  {
    name: "Buzz Lightyear",
    occupation: "Guardian de la galaxia",
    catchPhrase: "Hasta el infinito y más allá."
  },
  {
    name: "Rayo McQueen",
    occupation: "Coche de carreras",
    catchPhrase: "Soy el más veloz. Soy el rayo."
  },
  {
    name: "WALL·E",
    occupation: "Robot compactador de basura",
    catchPhrase: "EVA"
  }
];




const movies = [
  {
    title: "Cars",
    genre: "Aventuras",
    plot: "El aspirante a campeón de carreras Rayo McQueen parece que está a punto de conseguir el éxito, la fama y todo lo que había soñado, hasta que por error toma un desvío inesperado en la polvorienta y solitaria Ruta 66. Su actitud arrogante se desvanece cuando llega a una pequeña comunidad olvidada que le enseña las cosas importantes de la vida que había olvidado."
  },
  {
    title: "Toy Story",
    genre: "Fantasía",
    plot: "Los juguetes de Andy, un niño de 6 años, temen que haya llegado su hora y que un nuevo regalo de cumpleaños les sustituya en el corazón de su dueño. Woody, un vaquero que ha sido hasta ahora el juguete favorito de Andy, trata de tranquilizarlos hasta que aparece Buzz Lightyear, un héroe espacial dotado de todo tipo de avances tecnológicos. Woody es relegado a un segundo plano. Su constante rivalidad se transformará en una gran amistad cuando ambos se pierden en la ciudad sin saber cómo volver a casa."
  },
  {
    title: "WALL•E",
    genre: "Drama",
    plot: "En el año 2800, en un planeta Tierra devastado y sin vida, tras cientos de solitarios años haciendo aquello para lo que fue construido -limpiar el planeta de basura- el pequeño robot WALL•E (acrónimo de Waste Allocation Load Lifter Earth-Class) descubre una nueva misión en su vida (además de recolectar cosas inservibles) cuando se encuentra con una moderna y lustrosa robot exploradora llamada EVE. Ambos viajarán a lo largo de la galaxia y vivirán una emocionante e inolvidable aventura."
  }
];



Celebrity.collection.drop();
Movie.collection.drop();



// Confirmacion de creaccion tanto para movies como celebrities en consola.


Movie.create(movies, (err, data) => {
  if (err) {
    throw err;
  }
  console.log(`Created ${movies.length} movies`);
});


Celebrity.create(celebrities, (err, data) => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
});
