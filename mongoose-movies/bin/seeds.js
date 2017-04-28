/*jshint esversion: 6*/
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

mongoose.connect('mongodb://localhost:27017/movies-dev');

// const celebrities = [
//   {
//     name: 'Arnold',
//     occupation: "acttion actor",
//     catchPhrase: "sayonara baby"
//   },
//   {
//     name: 'Keanu',
//     occupation: "acttion actor",
//     catchPhrase: "I know kung fu"
//   },
//   {
//     name: 'Tom Hardy',
//     occupation: "best actor",
//     catchPhrase: "mmm"
//   },
// ];
//
// Celebrity.create(celebrities, (err, docs)=> {
//
//   if(err)
//    {throw err;}
//   docs.forEach((drone) => {
//     console.log(drone.name);
//   });
//
//   mongoose.connection.close();
// });

const movies = [
  {
    title: 'Jurassik Park',
    genre: 'action',
    plot: "a good one"
  },
  {
    title: 'Jurassik World',
    genre: 'action',
    plot: "a bad one"
  },
];

Movie.create(movies,(err,docs)=>{
  if(err)
  {
    next(err);
  }
  docs.forEach((doc)=>{
      console.log(doc.title);
  });
  mongoose.connection.close();
});
