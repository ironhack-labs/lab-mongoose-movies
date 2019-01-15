const mongoose = require('mongoose');
const Movie = require('../models/Movie');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

/*const celebrity = [
  {
    name: "Zine Zidane",
    occupation: "Futbolista",
    catchPhrase: "Gol",
  },
  {
    name: "Mia Khalifa",
    occupation: "Actriz",
    catchPhrase: "nice",
  },
  {
    name: "Changoleon",
    occupation: "Actor",
    catchPhrase: "chupe",
  }
]*/

const movies = [
{
  title: "Saw",
  genre: "Horror",
  plot: "Adam y Lawrence se despiertan encadenados en un baño infecto con un cadáver entre ellos. Su secuestrador es un maniaco, cuyo juego consiste en forzar a sus cautivos a herirse a sí mismos o a otros para permanecer vivos."
},
{
  title: "The Strangers",
  genre: "Horror",
  plot: "Tres asaltantes enmascarados aterrorizan a una joven pareja (Liv Tyler, Scott Speedman) en su remota casa de campo."
},
{
  title: "Halloween",
  genre: "Horror",
  plot: "El despiadado Michael Myers escapa del autobús en el que estaba siendo trasladado y regresa a Haddonfield, Illinois, para asesinar a Laurie Strode, quien lleva cuarenta años sufriendo la locura de este monstruo sanguinario."
}
]

Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${Movie.length} movies`)
  mongoose.connection.close()
});