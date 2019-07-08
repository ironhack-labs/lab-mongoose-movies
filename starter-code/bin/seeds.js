const mongoose     = require('mongoose');
const Celebrity         = require('../models/Celebrity');


mongoose
  .connect('mongodb://localhost/celebrities-app', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });
  
const celeb = [
  {
    name: 'Talu Velludo',
    occupation: 'Facebook influencer',
    catchPhrase: 'Go Vegan!'
  },
  {
    name: 'Eduardo Gonzalez',
    occupation: 'programmer',
    catchPhrase: "I don't know."
  },
  {
    name: 'Mickey Mouse',
    occupation: 'Mouse',
    catchPhrase: 'Oh, boy!'
  }
]


Celebrity.create(celeb)
.then(()=>{
  console.log('it worked')
})
.catch(()=>{
  console.log('it didnt work')
})