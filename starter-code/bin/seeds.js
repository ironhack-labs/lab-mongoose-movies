const mongoose = require("mongoose");
const celebrityModel = require("./../models/celebrity");
const movieModel = require("./../models/movie");

const celebrities = [
    {name: "Rihanna",
    occupation: "singer",
    catchphrase: "hell yes"},

    {name: "Steve Jobs",
    occupation: "engineer",
    catchphrase: "go big or go home"},

    {name: "Kim Jong Un",
    occupation: "politician",
    catchphrase: "Don't mess with me"}
];

const movies = [
  {title: "Titanic",
  genre: "action",
  plot: "sink of a ship"},

  {title: "Drive",
  genre: "action",
  plot: "a guy drives a car"},

  {title: "The Godfather",
  genre: "thriller",
  plot: "a guys plays everyone"}
];

mongoose
.connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
.then(x => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
})
.catch(err => {
  console.error('Error connecting to mongo', err)
});


// celebrityModel.insertMany(celebrities)
// .then(dbSuccess => {
//     console.log("celebrities inserted successfully", dbSuccess);
// })
// .catch(dbErr => {
//     console.log("Oh no", dbErr);
// });

// module.exports = celebrities;


movieModel.insertMany(movies)
.then(dbSuccess => {
    console.log("movies inserted successfully", dbSuccess);
})
.catch(dbErr => {
    console.log("Oh no", dbErr);
});

module.exports = movies;
