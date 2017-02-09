const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movies');
const Movie = require('../models/movie');

// const celebrities = [
//   {
//     name       : 'Misty Blue',
//     occupation : 'unknown',
//     catchPhrase: 'Happy days'
//   },
//   {
//     name       : 'Hal Davis',
//     occupation : 'comedian',
//     catchPhrase: 'Holy Mackerel'
//   },
//   {
//     name       : 'Ginger Ale',
//     occupation : 'guru to the stars',
//     catchPhrase: 'If you think it, you can do it'
//   }
// ];

const movies = [
  {
    title : "The Witch Who Couldn't fly",
    genre : "Fantasy",
    plot  : "There's a witch who cannot fly and has to walk everywhere. It's really inconvenient and all the other witches make fun out of her."
  },
  {
    title : "Houses that Move",
    genre : "Horror",
    plot  : "There is one dark street in the centre of Manhattan where houses get up and move around. People never know where their house will be the next time and are constantly losing their entire property."
  },
  {
    title : "Love Sucks",
    genre : "Romantic comedy",
    plot  : "This girl thinks love is for gross annoying people. She meets a guy who thinks the same so they try to anti-date. They end up falling in love. It sucks."
  }
];

Movie.create(movies, (err, docs)=> {
  if (err){throw(err);}

  docs.forEach( (movie)=>{
    console.log(movie.title);
  })
  mongoose.connection.close();
});
