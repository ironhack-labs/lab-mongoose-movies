const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')
const Movie = require('../models.Movie')


const celebrityDocs = [ {
  name: 'Arnold Schwarzenegger',
  occupation: 'Body Builder',
  catchPhrase: 'My body is like breakfast, lunch and dinner. I don\'t think about it, I just have it.'
}, {
  name: 'Paris Hilton',
  occupation: 'Socialite',
  catchPhrase: 'I play dumb like Jessica Simpson plays dumb. But we know exactly what we\'re doing. We\'re smart blondes.'
}, {
  name: 'Donald Trump',
  occupation: 'President of the United States',
  catchPhrase: 'Grab them by the pussy'
}]


mongoose
  .connect(`mongodb://localhost/celebrity-project`, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    return Celebrity.insertMany(celebrityDocs)
  })
  .then(celebrityDocs => {
    console.log(celebrityDocs)
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