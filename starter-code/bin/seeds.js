const mongoose = require('mongoose'); 
// const Celebrity = require('../models/celebrity');

// const dbName = 'movies-app'
// mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//   {
//     name: "Selena Gomez",
//     occupation: 'singer, actress, model' ,
//     catchPhrase: "Suzanne Collins",
    
//   },
//   {
//     name: "George Harris",
//     occupation: 'comedian' , 
//     catchPhrase: "no lo logro",
    
//   },
//   {
//     name: "The Rock",
//     occupation: 'actor, papi chulo' ,     
//     catchPhrase: "It Doesn’t Matter.",
    
//   },
// ]


// Celebrity.create(celebrities)
// .then((result)=>{
//     console.log(`created ${result.length} celebrities`);
//     mongoose.disconnect();
// })
// .catch((err)=>{
//     console.log(err)
// })

//to run write this in the terminal where my bin folder is at: node bin/seeds.js

//  MOVIES-------------------------------------------

//import model to have blueprint
const Movie = require ('../models/movie')

const dbName = 'movies-app' //name  //creating the database -- database name
mongoose.connect(`mongodb://localhost/${dbName}`) //creating the database

const movies = [
  {
    title: "The Hunger Games 2.0",
    genre: "Action/drama",
    plot:"A barred wrist toes the line before a chapel. "
  },
  {
    title: "Divergent 2.0",
    genre: "Action",
    plot:"A :) barred wrist toes the line before a chapel. "
  },
  {
    title: "Insurgent 2.0",
    genre: "Action",
    plot:"A  :) :)barred wrist toes the line before a chapel. "
  },
]

//use this array to create things in the database
//use mongoose method (Movie.create) to create entries in DB
//parameter is the name of the array
Movie.create(movies)
.then((result) =>{
  console.log(`${result.length} movies created`)
  //to see in the terminal what movies we have planted
  movies.forEach(oneMovie => {
    console.log('in DB:', oneMovie.title)
  }) //cut off connection
  mongoose.disconnect();
})
.catch((err) =>{
  console.log('error while creating seeds, go to seeds.js ',err)
})


