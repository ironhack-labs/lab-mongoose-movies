const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require("../models/Movie")

mongoose
.connect('mongodb://localhost/movieCelebDB', {useMongoClient: true})
.then(() => {
  console.log('Connected to Mongo!')
}).catch(err => {
  console.error('Error connecting to mongo', err)
});


// const celebrities = [
//   {
//     name: "Max Power",
//     occupation: "actor",
//     catchPhrase:  "Always the MAX"
//   },
//   {
//     name: "V.O.I.C.E",
//     occupation: "singer",
//     catchPhrase:  "Taking the High road"
//   },
//   {
//     name: "Bladder McDamon",
//     occupation: "comedian",
//     catchPhrase:  "Funny me lucky"
//   }
// ];

// Celebrity.create(celebrities)
// .then((result)=>{
//   console.log(result);
// })
// .catch((err)=>{
//   console.log(err);
// });

const movies = [
  {
    title: "Killer Explosion",
    genre: "Action",
    plot: "There's a killing explosion that kills a lot of people"
  },
  {
    title: "Damascus Dagger",
    genre: "Drama",
    plot:  "A girl swallows a dagger but manages to overcome this and becomes a singer"
  },
  {
    title: "Clowny Clown 5",
    genre: "Comedy",
    plot: "Funny clown eats people and the has fun with the corpses"
  }
];

Movie.create(movies)
.then((success)=> {
  console.log(success);
})
.catch((err)=> {
  console.log(err)
})