require('dotenv').config();
const mongoose = require('mongoose');
const Movie = require('../models/movie');

const dbName = `${process.env.DATABASE}`;

mongoose
  .connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const movies = [
  {title: "Asesinato en Cantora.",
  genre: "Thriller",
  plot: "Un joven Kiko, investiga la muerte de Cachuli y la desaparición de la famosa receta de Pollo a la Cantora."},
  {title: "Minotauros en Ubrique.",
  genre: "Terror",
  plot: "Extraños sucesos comienzan a aterrorizar el pequeño pueblo de Ubrique cuando un extraño templo griego es descubierto en el cortijo de Jesulín."},
  {title: "Yo quería ser portero.",
  genre: "Drama",
  plot: "Un joven dotado para el amor pero no para el canto, debe dejar su carrera deportiva a raiz de un accidente."}
];


Movie.create(movies)
.then(movieInserted => {
  console.log(`Created ${movieInserted.length} movies`);
  mongoose.connection.close();
})
.catch(err => {
  console.log(err)
}) 