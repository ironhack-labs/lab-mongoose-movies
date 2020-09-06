const mongoose = require('mongoose')
const Movie = require('../models/Movie')
const Celebrity = require('../models/Celebrity')

const movieList = [
  {
    title:'The Shawshank Redemption',
    genre:'Drama',
    plot:'Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.'
  },
  {
    title: 'Casablanca',
    genre:'War Romance',
    plot: 'During WWII, Rick, a nightclub owner in Casablanca, agrees to help his former lover Ilsa and her husband. Soon, Ilsa/s feelings for Rick resurface and she finds herself renewing her love for him.'
  },
  {
    title: 'Gone with the Wind',
    genre:'War Romance',
    plot: 'American classic in which a manipulative woman and a roguish man carry on a turbulent love affair in the American south during the Civil War and Reconstruction'
  }
]

/* const Celebrity = require('../models/Celebrity')
const celebrityList = [
    {
        name: 'Brad Pitt',
        occupation:'Actor',
        catchPhrase:'I was born in Shawnee, Oklahoma'
    },{
        name: 'Matthew McConaughey',
        occupation:'Actor',
        catchPhrase:'Alright, Alright, Alright'
    },{
        name: 'Paris Hilton',
        occupation:'Reality Show Star',
        catchPhrase:'Thats Hot'
    }]
*/

mongoose
  .connect(`mongodb://localhost/celebrity-list`, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    return Celebrity.create(celebrityList)
  })
  .then(celebrityList => {
    console.log(celebrityList)
  }) 
  .then(() => {
    return Movie.insertMany(movieList)
  })
  .then(movieList => {
    console.log(movieList)
    mongoose.disconnect()
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  }); 