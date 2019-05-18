const mongoose = require('mongoose');
//const Celebrity = require('../models/celebrity')

const Movie = require('../models/movie')


const dbName = 'MoviesData'
mongoose.connect(`mongodb://localhost/${dbName}`);

//const celebs = [
//  {
//    name: 'Paco',
//    occupation:'Actor',
//    catchPhrase:'Lorem ipsum dolor sit amet'
//  },
//  {
//    name: 'Clara',
//    occupation:'Cantante',
//    catchPhrase:'Lorem ipsum dolor sit amet'
//  },
//  {
//    name: 'Lili',
//    occupation:'Bailarina',
//    catchPhrase:'Lorem ipsum dolor sit amet'
//  },
//]

const pelis=[
  {
    title: 'La vida es bella',
    genre: 'Drama',
    plot: 'Una familia que lo pasa muy mal',
  },
  {
    title: 'La vida de Brian',
    genre: 'Comedia',
    plot: 'Parodia',
  },
  {
    title: 'La vida de Pi',
    genre: 'Drama',
    plot: 'Naufragio',
  }
]


Movie.create(pelis)
  .then(pelisCreated=>{
    console.log(`Se han añadido ${pelisCreated.length} pelis a la DB`)
    mongoose.connection.close()
  })
  .catch(err => console.log(`Hubo un error: ${err}`))

//Celebrity.create(celebs)
//  .then(celebsCreated => {
//    console.log(`Añadidas ${celebsCreated.length} celebridades`)
//    mongoose.connection.close()
//  })
//  .catch(err => console.log(`Hubo un error: ${err}`))