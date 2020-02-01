const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");
const mongoose = require("mongoose");
// const celebrities = [{
//     name: "Bernie Sanders",
//     occupation: "US Senator",
//     catchPhrase: "Medicare for all!",
// },
// {
//     name: "Donald Trump",
//     occupation: "US President",
//     catchPhrase: "She's nasty!",
// },
// {
//     name: "Elizabeth Warren",
//     occupation: "US Senator",
//     catchPhrase: "I have a plan.",
// }]

const movies = [{
  title: "The Lion King",
  genre: "Animation",
  plot: "A lion becomes king"
},
{
  title: "Titanic",
  genre: "Drama",
  plot: "based on true story"
},
{
  title: "It",
  genre: "Horror",
  plot: "Scary"
}]

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

// Celebrity.create(celebrities)
//     .then(dbRes => {
//         console.log("Celebrities Inserted Successfully", dbRes)
//     })
//     .catch(dbErr => {
//         console.log("OH NO!", dbErr);
//     })

Movie.create(movies)
  .then(dbRes => {
    console.log("Movies Created Successfully", dbRes)
  })
  .catch(dbErr => {
    console.log("OH NO!", dbErr);
  })

// run 'node bin/seeds.js' to create db