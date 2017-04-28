const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity');
//
// mongoose.connect("mongodb://localhost:27017/celebrities");

const Movie = require('../models/movie');

mongoose.connect("mongodb://localhost:27017/celebrities");


let movies = [
  {
    title: 'Brokeback Mountain',
    genre: 'Romance',
    plot: 'something about gay cowboys?',
  },

  {title: 'Star Wars',
  genre: 'Sci-Fi',
  plot: 'Something something, along time ago in a galaxy far away',
},
{
  title: 'Lethal Hard',
  genre: 'Action',
  plot: 'Out of control racially diverse duo end up getting into a hair-raising terrorst situation',
},
]
// let celebrities = [
//   {
//     name: "Johnny Depp",
//     occupation: "actor",
//     catchPhrase: "Where's the rum gone!?",
//   },
//   {
//     name: "Manny Pacquiao",
//     occupation: "boxer/homophobic senator",
//     catchPhrase: "I punch better than I legislate",
//   },
//   {
//     name: "Elon Musk",
//     occupation: "real-life Tony Stark",
//     catchPhrase: "Initiate beast mode",
//   },
// ]


// Celebrity.create(celebrities, (err, docs)=>{
//   if(err) { throw err}
//   docs.forEach((celebrity) => {
//     console.log(celebrity.name);
// })

Movie.create(movies, (err, docs)=>{
  if(err) { throw err}
  docs.forEach((movie) => {
    console.log(movie.title);
})
mongoose.connection.close();

});
