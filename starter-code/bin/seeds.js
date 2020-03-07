const Celebrity     = require('../models/Celebrity');
const Movie         = require('../models/Movie');
const mongoose      = require('mongoose');

mongoose
  .connect('mongodb://localhost/celebrity', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


let celebrities = [
    {
        name: "Alejandro",
        occupation: "actor",
        catchPhrase: "keep it simple"
    },
    {
        name: "Carlos",
        occupation: "singer",
        catchPhrase: "im happy"
    },
    {
        name: "Damian",
        occupation: "comedian",
        catchPhrase: "im very tall"
    }
  ];

  let movies = [
    {
        title: "AlejandroM",
        genre: "actor",
        plot: "keep it simple"
    },
    {
        title: "CarlosM",
        genre: "singer",
        plot: "im happy"
    },
    {
        title: "DamianM",
        genre: "comedian",
        plot: "im very tall"
    }
  ];


  console.log(movies)
   
Movie.create(movies, err => {
    if (err) 
    {
        console.log("error with the creation the movies");
    }
});

mongoose.connection.close();