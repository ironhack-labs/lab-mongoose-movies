const mongoose = require('mongoose');

const CelebrityModel = require('../models/celebrities.js');
const MovieModel = require('../models/movies.js');

mongoose.connect('mongodb://localhost/mongoose-movies');

/*
var celebrities = [
  {
    name: "Jack",
    occupation: "Dancer",
    catchPhrase: "The rain is wet"
  },
  {
    name: "Mary",
    occupation: "Actress",
    catchPhrase: "The cameras look at me and I look at them"
  },
  {
    name: "Paul",
    occupation: "Musician",
    catchPhrase: "Let it be"
  }
];

CelebrityModel.create(
  // 1st argument -> array of celebrities to save
  celebrities,

  // 2nd argument -> callback
  (err, success) => {
      if (err) {
          console.log('Wrong!');
          console.log(err);
          return;
      }

      success.forEach(celebrity => {
          console.log('New Celebrity ---> ' + celebrity.name);
      });
  }
);
*/


var movies = [
  {
    title: "Clockwork orange",
    genre: "Sci-fi",
    plot: "Crazy guy that likes ultra-violence and Beethoven goes through crazy experiment"
  },
  {
    title: "2001: Space Odyssey",
    genre: "Sci-si",
    plot: "A retrospective and projection of the history of the human presence in the universe"
  },
  {
    title: "Pawn Sacrifice",
    genre: "Biography",
    plot: "The life of Bob Fisher, a chess master."
  }
];

MovieModel.create(
  // 1st argument -> array of celebrities to save
  movies,

  // 2nd argument -> callback
  (err, success) => {
      if (err) {
          console.log('Wrong!');
          console.log(err);
          return;
      }

      success.forEach(movie => {
          console.log('New Movie ---> ' + movie.title);
      });
  }
);
