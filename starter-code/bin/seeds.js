const Celebrity = require("../models/celebrity-model.js")
const Movie = require("../models/movie-model.js")
const mongoose = require("mongoose");

mongoose
  .connect('mongodb://localhost/mongoose-movie', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

// const celebrityData =[
//   {name: "Leonardo DiCaprio",
//   occupation: "Actor",
//   catchPhrase: "Lorem ipsum dolor sit amet"},
//   {name: "Xavier Dolan",
//   occupation: "Director",
//   catchPhrase: "Consectetur adipiscing elit"},
//   {name: "Charles Aznavour",
//   occupation: "Singer",
//   catchPhrase: "Sed do eiusmod tempor incididunt"},
// ];

// celebrityData.forEach(oneCelebrity =>
//   Celebrity.create(oneCelebrity)
//     .then(celebrityDoc => {
//       console.log(`created ${celebrityDoc.name}`)
//     })
//     .catch(err=>{console.log("creation celebrityData failed", err)})
// )


const movieData =[
  {title: "Mommy",
  genre: "Drama",
  plot: "Lorem ipsum dolor sit amet"},
  {title: "Titanic",
  genre: "Drama",
  plot: "Consectetur adipiscing elit"},
  {title: "Interstellar",
  genre: "Science-Fiction",
  plot: "Sed do eiusmod tempor incididunt"},
];


movieData.forEach(oneMovie =>
  Movie.create(oneMovie)
    .then(movieDoc => {
      console.log(`created ${movieDoc.title}`)
    })
    .catch(err=>{console.log("creation movieData failed", err)})
)

