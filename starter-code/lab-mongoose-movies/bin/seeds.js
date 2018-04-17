// seed for movie
const mongoose = require("mongoose");

const Movie = require("../models/movies-models")


mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/lab-mongoose-movies', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

 const movies = [
{
name : " The last Samurai", 
genre : "War", 
plot : " One American is lost in Japan"
},
{
  name : " Forest Gump", 
  genre : "Adventure", 
  plot : " One guy running a lot"
},
{
  name : "Gladiator", 
  genre : "Fight", 
  plot : "One guy who kills other guys"
}
 ];

  Movie.create(movies)
.then(()=> {
  console.log(`Created ${movies.length} movies`)
})
.catch((err)=> {
  console.log(`Creation Error 🐝 `, err)
});









// seed for celeb

// const mongoose = require("mongoose");

// const Celebrity = require("../models/celebrity-models")


// mongoose.Promise = Promise;
// mongoose
//   .connect('mongodb://localhost/lab-mongoose-movies', {useMongoClient: true})
//   .then(() => {
//     console.log('Connected to Mongo!')
//   }).catch(err => {
//     console.error('Error connecting to mongo', err)
//   });

//  const celebrities = [
// {
// name : " James Blunt", 
// occupation : "Singer", 
// catchPhrase : " You are beautiful Nizar"
// },
// {
//   name : " Kamaro", 
//   occupation : "Singer", 
//   catchPhrase : " Femme like Vivian"
// },
// {
//   name : " Shy'm", 
//   occupation : "Singer", 
//   catchPhrase : " Do you believe in Love"
// }
//  ];

//   Celebrity.create(celebrities)
// .then(()=> {
//   console.log(`Created ${celebrities.length} celebrities`)
// })
// .catch((err)=> {
//   console.log(`Creation Error 🐝 `, err)
// });