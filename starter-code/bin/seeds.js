const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')


// const celebrityDocs = [ {
//   name: 'Arnold Schwarzenegger',
//   occupation: 'Body Builder',
//   catchPhrase: 'My body is like breakfast, lunch and dinner. I don\'t think about it, I just have it.'
// }, {
//   name: 'Paris Hilton',
//   occupation: 'Socialite',
//   catchPhrase: 'I play dumb like Jessica Simpson plays dumb. But we know exactly what we\'re doing. We\'re smart blondes.'
// }, {
//   name: 'Donald Trump',
//   occupation: 'President of the United States',
//   catchPhrase: 'Grab them by the pussy'
// }]


const movieDocs = [ {
  title: 'Parasite',
  genre: 'Thriller',
  plot: 'The poor Kim family leave squalor behind to infiltrate the affluent Parks’ home.'
}, {
  title: 'Once Upon a Time … in Hollywood',
  genre: 'Comedy / Drama',
  plot: 'Two dudes—Rick Dalton, an aging star from TV westerns, and his stunt double, Cliff Booth — live out their bromance in the Manson - era 1960s.'
}, {
  title: 'Gone Girl',
  genre: 'Thriller',
  plot: 'When his seemingly perfect wife Amy goes missing, philandering Nick becomes the prime suspect.'
}]



mongoose
  .connect(`mongodb://localhost/celebrity-project`, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    // return Celebrity.insertMany(celebrityDocs)
    return Movie.insertMany(movieDocs)
  })
  .then(movieDocs => {
    console.log(movieDocs)
    mongoose.disconnect()
  })
  // .then(() => {
  //   return Location.insertMany(locations)
  // })
  // .then(locations => {
  //   console.log(locations)
   
  // })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });