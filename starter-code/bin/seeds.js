const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies-celebrities', {useMongoClient: true});
const Celebrity = require('../models/celebrities');
const Movie = require('../models/movies');

const celebrities = [
  {
    name: "Jordi Hurtado",
    occupation: "Inmortal being",
    catchPhrase : "Life has no end for me, I am infinite.",
  },
  {
    name: "Nicolas Cage",
    occupation: "Sexy Actor",
    catchPhrase : "Put... the bunny... back... in the box.",
  },
  {
    name: 'Rick Sanchez',
    occupation: "Crazy Scientist",
    catchPhrase : "Wubba lubba dub dub!",
  }
];

const movies = [
  {
    title: "Saber & Ganar",
    genre: "Ultimate Knowledge",
    plot : "An inmortal being questions genius people intelligence",
  },
  {
    title: "Lord of War",
    genre: "Action & Drama",
    plot : "Nicolas Cage is acting, is really a necessity to know the plot?",
  },
  {
    title: "Rick & Morty",
    genre: "Crazy",
    plot : "Awesome things happening...",
  }
];


Celebrity.collection.drop();
Movie.collection.drop();

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach((celeb) => {
    console.log(celeb.name)
  });
  mongoose.connection.close();
});

Movie.create(movies, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach((movie) => {
    console.log(movie.title)
  });
  mongoose.connection.close();
});
