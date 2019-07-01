const mongoose = require('mongoose');
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie")

mongoose
  .connect('mongodb://localhost/celebrities', {useNewUrlParser: true}).then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

Movie.create([
  {
  name: "96 hours" ,
  genre: "Action",
  plot: "I will find you and I will kill you"
},{
  name: "The Green Book" ,
  genre: "drama" ,
  plot: "Black Musician in America"
} , {
  name: "Avengers: Endgame" ,
  genre: "Action" ,
  plot: "I don´t know what I have to write here"
}]).then(movies => {
  console.log("Movies are implemented", movies)
});