const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.model')
const Movie = require('../models/movie.model')

const dbName = 'celebrity-collection'
mongoose.connect(`mongodb://localhost/${dbName}`)
Celebrity.collection.drop()
Movie.collection.drop()


const celebrity = [{
    name: 'Rachel Green',
    occupation: 'Actor',
    catchPhrase: 'He\'s is so pretty, I want to cry.'
  },
  {
    name: 'Monica Geller',
    occupation: 'Actor',
    catchPhrase: 'I know!.'
  },
  {
    name: 'Phoebe Buffay',
    occupation: 'Actor',
    catchPhrase: 'Oh,no!.'
  },
  {
    name: 'Chandler Bing',
    occupation: 'Actor',
    catchPhrase: 'I\'m not a blah, I am hot!.'
  },
  {
    name: 'Joey Tribbiani',
    occupation: 'Actor',
    catchPhrase: 'How you doing?.'
  },
  {
    name: 'Ross Geller',
    occupation: 'Actor',
    catchPhrase: 'We were on a break!.'
  }
]

const movie = [{
    title: 'Black Panther',
    gnre: ['Action', 'Drama', 'Science Fiction'],
    plot: 'El principe de wakanda peleando'
  },
  {
    title: 'Spider-Man',
    gnre: ['Action', 'Animation', 'Science Fiction'],
    plot: 'Todo empieza con la picadura de una araña'
  },
  {
    title: 'A Star Is Born',
    gnre: ['Drama'],
    plot: 'Un cantante y una camarera'
  },
  {
    title: 'Coco',
    gnre: ['Comedy', 'Animation', 'Kids'],
    plot: 'Dia de los muertos'
  },
  {
    title: 'Star wars',
    gnre: ['Action', 'Drama', 'Science Fiction'],
    plot: 'Naves espaciales y guerras'
  },
  {
    title: 'Toy Story',
    gnre: ['Comedy', 'Animation', 'Kids'],
    plot: 'Juguetes que hablan'
  }
]

Celebrity.create(celebrity, (err) => {
  if (err) {
    throw (err)
  }
  console.log(`Created ${celebrity.length} celebrities`)
  mongoose.connection.close()
})

Movie.create(movie, (err) => {
  if (err) {
    throw (err)
  }
  console.log(`Created ${movie.length} movies`)
  mongoose.connection.close()
})