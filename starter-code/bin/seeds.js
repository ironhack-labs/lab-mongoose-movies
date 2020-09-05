const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')


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

mongoose
  .connect(`mongodb://localhost/celebrity-list`, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    return Celebrity.create(celebrityList)
  })
  .then(celebrityList => {
    console.log(celebrityList)
    mongoose.disconnect()
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });