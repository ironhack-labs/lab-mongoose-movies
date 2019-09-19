const mongoose = require('mongoose')
const Movies = require('../models/movies')



const movie = [{
  title: 'AAA',
  genre: 'Drama',
  plot: 'very dramatic'
},
{
   title: 'BBB',
  genre: 'NBA player',
   plot: 'HairLine'
  },
  {
   title: 'CCC',
  genre: 'comedy',
   plot: 'funny'
  },





]
// const celebrities = [
//   {
//     name: 'Lebron James',
//     occupation: 'NBA player',
//     catchPhrase: 'HairLine'
//   },
//   {
//     name: 'Kobe Bryant',
//     occupation: 'GOAT',
//     catchPhrase: 'Ball is life'
//   },
//   {
//     name: 'MJ',
//     occupation: 'GOD',
//     catchPhrase: 'Shoes are life'
//   }
// ]







mongoose
.connect('mongodb://localhost/labgoose', {useNewUrlParser: true})
.then(x=> {
  console.log(`Connected to Mongo! Database name:"${x.connections[0].name}`)
})
Movies.insertMany(movie).then(movies => {
console.log(movies)
}).catch(err=> console.error(err)) 