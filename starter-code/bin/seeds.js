const mongoose     = require('mongoose');
// const Celebrity        = require('../models/Celebrity');
const Movie   = require('../models/Movie')


mongoose
  .connect('mongodb://localhost/celebrity-app', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });


// const  celebrityArray= [
//   {
//       name: "Selena" ,
//       occupation:"artist" ,
//       catchPhrase: "como la flor"
     
//   },
//   {
//     name: "The Script",
//     occupation: "band" ,
//     catchPhrase: "For the First Time"
   
//   },

//   {
//       name: "Mickey Mouse",
//       occupation: "Cartoon",
//       catchPhrase: "Oh Toodles!"
     
//   }
// ];

// Celebrity.create(celebrityArray)
// .then(()=>{
//   console.log('it worked')
// })
// .catch(()=>{
//   console.log('it didnt work')
// });




const  moviesArray= [
  {
      name: "Selena" ,
      occupation:"artist" ,
      catchPhrase: "como la flor"
     
  },
  {
    name: "The Script",
    occupation: "band" ,
    catchPhrase: "For the First Time"
   
  },

  {
      name: "Mickey Mouse",
      occupation: "Cartoon",
      catchPhrase: "Oh Toodles!"
     
  }
];