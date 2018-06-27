const mongoose = require("mongoose");

const Celebrity = require("../models/celebrity.js");
const Movie = require("../models/movie.js")

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/mongoose-movies', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

//   const celebData = [
//     {
//       name: "Natalie Portman",
//       occupation: "Actor",
//       catchPhrase: "I loved school so much that most of my classmates considered me a dork."
//     },
//     {
//       name: "Natalie Wood",
//       occupation: "Actor",
//       catchPhrase: "The only time a woman really succeeds in changing a man is when he is a baby."
//     },
//     {
//       name: "Bugs Bunny",
//       occupation: "Animated Character",
//       catchPhrase: "Eh... What's up, doc?"
//     }
//   ];


// Celebrity.create(celebData)
//   .then((results) => {
//     console.log("Celebrity creation worked!")
//   })
//   .catch((err) => {
//     console.log(err)
//   })


  const movies = [
    {
      title: "The Wild Wild West",
      genre: "Soap Opera",
      plot: "About things and other things with people"
    },
    {
      title: "The HerStory",
      genre: "Real life drama",
      plot: "A story of things, people, and places"
    },
    {
      title: "Ninja Warrior",
      genre: "Action",
      plot: "Action-y things take place - it's exciting!"
    }
  ];

Movie.create(movies)
.then((celedResults) => {
  console.log("Movies creation worked!")
})
.catch((err) => {
  console.log(err)
})