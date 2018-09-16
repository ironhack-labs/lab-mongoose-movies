const Celebrity = require("../models/celebrity.js");
const Movie = require("../models/movie.js");
const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost/lab-mongoose-movies', {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const celebArray = [{
    name: "Pepe Peeps",
    occupation: "singer",
    catchPhrase: "Hey, its me Peeps!"
  },
  {
    name: "Renee Zimbwagwer",
    occupation: "actress",
    catchPhrase: "Bitchface!"
  },
  {
    name: "Arnorld Aparicio",
    occupation: "comedian",
    catchPhrase: "lol am I right?"
  },

];

const movieArray = [{
  title: "Peeps around the world",
  genre: "horror",
  plot: "just Pepe travelling around the world"
},
{
  title: "Star Wars ep 88",
  genre: "Drama",
  plot: "Jar Jar's birthday goes wrong"
},
{
  title: "A blonde and a half",
  genre: "Comedy",
  plot: "girls doing things"
},

];


Celebrity.collection.drop();
Movie.collection.drop();

Celebrity.create(celebArray, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebArray.length} celebrities`);
  
});

Movie.create(movieArray, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebArray.length} movies`);
  mongoose.connection.close();
});