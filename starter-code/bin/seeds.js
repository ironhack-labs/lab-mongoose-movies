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




const  movieArray = [
  {
      title: "Ghostbusters",
      genre: "Fantasy",
      plot : "After the members of a team of scientists (Harold Ramis, Dan Aykroyd, Bill Murray) lose their cushy positions at a university in New York City, they decide to become ghostbusters to wage a high-tech battle with the supernatural for money."
  },

  {
     title: "Mickey's Once Upon a Christmas",
      genre: "Fantasy",
      plot : "Mickey and his friends tell three stories including, A Very Goofy Christmas and ,Mickey and Minnie's Gift of the Magi."
  },

  {
    title: "Arrival",
    genre: "Drama/Mystery",
    plot : "Linguistics professor Louise Banks (Amy Adams) leads an elite team of investigators when gigantic spaceships touch down in 12 locations around the world"
}];

  Movie.create(movieArray)
  .then(()=>{
    console.log('it worked')
  })
  .catch(()=>{
    console.log('it didnt work')
  });