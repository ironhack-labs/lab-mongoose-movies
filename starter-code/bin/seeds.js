const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity-model");
const Movie = require("../models/movies-model");

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/lab-mongoose-movies', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
});

// const arrayOfCelebrities =[
//     {
//         name: "Matt LeBlanc",
//         occupation: "actor",
//         catchPhrase: "How you doin'?"
//     },{
//         name: "Neil Patrick Harris",
//         occupation: "actor",
//         catchPhrase: "True story, bro"
//     },{
//         name: "Ryan Seacrest",
//         occupation: "radio presenter",
//         catchPhrase: "Seacrest out"
//     }
// ];

const arrayOfMovies = [
    {
     title: 'Batman',
     genre: 'fantasy',
     plot: "a plot for batman"
    },
    {
     title: 'Star Wars',
     genre: 'fantasy',
     plot: 'a plot for star wars'
    },
    {
     title: 'A third movie',
     genre: 'whatever',
     plot: "Again a plot"
    }
]

// Celebrity.create(arrayOfCelebrities)
// .then(()=>{
//     console.log(`Created ${arrayOfCelebrities.length} celebrities`);
// })
// .catch(()=>{
//     console.log("Creation Error", err);
// })

Movie.create(arrayOfMovies)
.then(()=>{
    console.log(`Created ${arrayOfMovies.length} movies`);
})
.catch(()=>{
    console.log("Creation Error", err);
})