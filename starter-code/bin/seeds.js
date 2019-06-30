const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const celebrities = [
  {
    name: "testA1",
    occupation: "testA2",
    catchPhrase: "testA3",
    
  },
  {
    name: "testB1",
    occupation: "testB2",
    catchPhrase: "testB3",
    
  },
  {
    name: "testC1",
    occupation: "testC2",
    catchPhrase: "testC3",
    
  }
]

mongoose
  .connect('mongodb://localhost/celebrities', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)

    Celebrity.insertMany(celebrities)
    .then ((data) =>{
      console.log(data)
      mongoose.disconnect()
    }).catch((err) =>{
      console.log(err)
    } )
  }) 
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });