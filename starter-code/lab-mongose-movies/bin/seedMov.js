const mongoose = require('mongoose');
const Movie = require ('../models/Movie');

const dbName = 'lab-mongose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
  {
    title: "Premonición",
    genre: "Suspenso",
    plot: "Sandra Bullock quiere cambiar el destino."
  },
  {
    title: "Mi villano favorito",
    genre: "Infantil",
    plot: "Gru quiere ser malo pero no lo es y adopta a unas niñas."
  },
  {
    title:"No sin ella",
    genre:"Drama",
    plot:"A punto de morir, Laurel lucha por conseguir que su pensión pase a manos de su esposa."
  }
]

Movie.create(movies,(err)=>{
  if(err){ throw(err)}
  console.log(`Creadas ${movies.length} películas`)
  mongoose.connection.close()
});