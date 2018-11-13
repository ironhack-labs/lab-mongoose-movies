const mongoose = require ("mongoose");

const Celebrity = require("../models/celebrity-model.js")
const Movie = require("../models/movie-model.js")

mongoose
  .connect('mongodb://localhost/mongoose-movie', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

//   const celebrityData = [
//     {
//       name: "Leonardo DiCaprio",
//       occupation: "Actor",
//       catchPhrase: "Lorem ipsum dolor sit amet",
//     },
//     {
//       name: "Xavier Dolan",
//       occupation: "Director",
//       catchPhrase: "Consectetur adipiscing elitconsectetur adipiscing elit",
//     },
//     {
//       name: "Charles Aznavour",
//       occupation: "Singer",
//       catchPhrase: "Sed do eiusmod tempor incididunt",
//     },
//   ];

// celebrityData.forEach(oneCelebrity => { 

//   Celebrity.create(celebrityData)
//     .then(data => {
//       console.log("IT WORKS");
//     })
//     .catch(err => {
//       console.log("IT DOES NOT WORK");
//     })

// })

  const movieData = [
      {
        title: "Mommy",
        genre: "Drama",
        plot: "Lorem ipsum dolor sit amet",
      },
      {
        title: "Titanic",
        genre: "Drama",
        plot: "Consectetur adipiscing elitconsectetur adipiscing elit",
      },
      {
        title: "Interstellar",
        genre: "Science fiction",
        plot: "Sed do eiusmod tempor incididunt",
      },
    ]

movieData.forEach(oneMovie => {
  Movie.create(oneMovie)
    .then(data => {
      console.log(`Movie ${data.title}`)
    })
    .catch(err => {
      console.log("Movie doesn't work")
    })
})