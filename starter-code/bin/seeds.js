const celebrityModel = require("./../models/Celebrity");
const mongoose = require("mongoose");
const movieModel = require("./../models/Movie");

// const celebrities = [
//     {
//         name: "Tom Cruise",
//         occupation: "actor",
//         catchPhrase: "do you accept the mission ?!"
//     }, 
//     {
//         name: "Britney Spears",
//         occupation: "singer",
//         catchPhrase: "Be bald or die"
//     },
//     {
//         name: "Andy Roddick",
//         occupation: "tennis-man",
//         catchPhrase: "If you don't have the time to get the ball, that's normal "
//     }
// ];

const movies = [
    {
        title: "American history X",
        genre: "trop bien",
        plot: "pose tes dents sur le trottoir"
    },
    {
        title: "Requiem for a dream",
        genre: "chelou",
        plot: "don't use drugs"
    },
    {
        title: "Ace Ventura",
        genre: "funny",
        plot: "chickakaaaaaaa"
    }
];

mongoose
  .connect('mongodb://localhost/movies', {useNewUrlParser: true})
  .then(x => {
    console.log(
        `Connected to Mongo! Database name: "${x.connections[0].name}"`);

    movieModel
        .insertMany(movies)
        .then(dbRes => {
        console.log("movies created");
        })
        .catch(err => {
        console.log("there is an error");
        });
    })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });