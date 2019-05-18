const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity')

const dbName = 'MoviesData'
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebs = [
  {
    name: 'Paco',
    occupation:'Actor',
    catchPhrase:'Lorem ipsum dolor sit amet'
  },
  {
    name: 'Clara',
    occupation:'Cantante',
    catchPhrase:'Lorem ipsum dolor sit amet'
  },
  {
    name: 'Lili',
    occupation:'Bailarina',
    catchPhrase:'Lorem ipsum dolor sit amet'
  },

]

Celebrity.create(celebs)
  .then(celebsCreated => {
    console.log(`Añadidas ${celebsCreated.length} celebridades`)
    mongoose.connection.close()
  })
  .catch(err => console.log(`Hubo un error: ${err}`))