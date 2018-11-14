
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity-model.js');
const Movie = require("../models/movie-model.js");

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


const celebrityData = [
  {
    name: "Amitabh bacchan",
    occupation:"Actor",
    catchPhrase: "The Big B",
   
  },
  {
    name: "Shreya ghoshal",
    occupation:"Singer",
    catchPhrase: "The beautiful Singer",
   
  },
  {
    name: "Tom cruise",
    occupation:"Actor",
    catchPhrase: "The stunt man",
   
  },
]
Celebrity.create(celebrityData)
.then(celebrityResults=>{
  console.log(`Inserted ${celebrityResults.length} Celebrity`);
})
.catch(err =>{
  console.log("create failure",err)
});

// const movieData =[
//   {
//     title:"Mission Impossible",
//     genre:"thriller",
//     plot:"plot",
//   },
//   {
//     title:"DDLJ",
//     genre:"romantic",
//     plot:"happy",
//   },
//   {
//     title:"taken",
//     genre:"suspense",
//     plot:"sus",
//   }
// ]
Celebrity.create(celebrityData)
.then(celebrityResults=>{
  console.log(`Inserted ${celebrityResults.length} Celebrity`);
})
.catch(err =>{
  console.log("Create failure",err);
})