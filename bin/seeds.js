const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')

mongoose
  .connect('mongodb://localhost/MongooseMovies', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  
const celebs = [
  {
    name: "Bobby",
    occupation: "Student",
    catchPhrase: "Fun Bobby.",
  },
  {
    name: "Ultra Fake",
    occupation: "Influencer",
    catchPhrase: "Something"
  },
  {
    name: "A Name",
    occupation: "A Job",
    catchPhrase: "Nopppppeee"
  }
]



Celebrity.create(celebs);

