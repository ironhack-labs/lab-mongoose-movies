const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')

const celebrities = [
  {
    name: "Matt Damon",
    occupation: "Actor",
    catchPhrase: "It was offered to me. When Spielberg says jump, bitches say how high?"
  },
  {
    name: "Morgan Freeman",
    occupation: "Actor",
    catchPhrase: "Challenge yourself; it’s the only path which leads to growth."
  },
  {
    name: "Charlize Theron",
    occupation: "Actress",
    catchPhrase: "You are only as great as the opportunities that are given to you"
  }
]

mongoose
  .connect('mongodb://localhost/mongoose-movies', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    Celebrity.collection.drop()
    return Celebrity.insertMany(celebrities)
  })
  .then(()=>{
    return Celebrity.find()
  })
  .then(cel => {
    cel.forEach(cele => console.log(cele.name) )
    mongoose.disconnect()
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });