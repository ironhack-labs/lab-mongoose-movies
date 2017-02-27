const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongooseMovies');

//Uncomment if this is first time running seeds.js

// const Celebrity = require ('../models/celebrity.js');
//
// const celebrities = [
//   {
//     name:'Matt Damon',
//     occupation: "Jason Borne",
//     catchPhrase: "Who am I?",
//   },
//   {
//     name:'Tom Cruise',
//     occupation: "Scientologist",
//     catchPhrase: "Nothing is impossible.",
//   },
//   {
//     name:'Jared Leto',
//     occupation: "Jesus",
//     catchPhrase: "Never playing The Joker agian.",
//   },
// ];
//
// Celebrity.create(celebrities, (err, docs)=>{
//   if (err){
//     throw err;
//   }
//   docs.forEach((oneCelebrity)=>{
//     console.log(`${oneCelebrity.name} ${oneCelebrity._id}`);
//   });
//   mongoose.disconnect();
// });

const Movie = require('../models/movie.js');
const movies = [
  {
     title: "Titanic",
     genre: "Fictional Drama",
     plot: "Doomed ship sailing"
  },
  {
     title: "Friday the 13th",
     genre: "Horror",
     plot: "Serial killer Jason Vorhees is a crazed maniac who preys on young kids camping."
  },
  {
     title: "My Big Fat Greek Wedding",
     genre: "Comedy",
     plot: "See what happens when the whole family tries to plan the wedding."
  },
];

Movie.create(movies, (err, docs)=>{
  if(err){
    throw err;
  }

  docs.forEach((oneMovie)=>{
    console.log(`${oneMovie.title} ${oneMovie._id}`);
  });
  mongoose.disconnect();
});
