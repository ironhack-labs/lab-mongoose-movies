const mongoose = require('mongoose');

const celebArr = [
  {
    name: 'Pootie Tang',
    occupation: 'Vigilante',
    catchPhrase: 'Wah Dah Tay'
  },

  {
    name: 'Pac-Man',
   occupation: 'Ghost-Hunter',
  catchPhrase: 'Wonka Wonka',
},
  {
    name: 'Mario',
    occupation: 'Plumer',
    catchPhrase: `Its me, Mario!`
  },

]

mongoose.connect('mongodb://localhost/celebrities', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });




  const Celebrity = require('../models/Celebrity');

  Celebrity.create(celebArr)
  .then((result)=>{
    console.log('hhehehehheheh')
    console.log(result);
  })
  .catch((err)=>{
    console.log(err);
  })



