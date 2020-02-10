const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dataCelebrities = [{
    name: 'Macaulay Culkin',
    ocupation: 'actor',
    catchPhrase: 'No el chiquillo ha llegado tarde porque le sale de sus huevos toreros.'
  },
  {
    name: 'Pedro Duque',
    ocupation: 'astronauta, político e ingeniero aeronáutico',
    catchPhrase: 'Como era el único español pues a mi me tocaba cocina..Le das al star y to parriba'
  },

  {
    name: 'Chuck Norris',
    ocupation: 'actor, campeón mundial de karate, exmilitar',
    catchPhrase: 'yo en mis peliculas intentaba dar un mensaje de amor, pero es que esa gente merecia morir'
  },
]

mongoose
  .connect('mongodb://localhost/movies', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


Celebrity.deleteMany()
  .then(() => {
    return Celebrity.create(dataCelebrities);
  })
  .then(() => {
    console.log('the data was added correctly');
    mongoose.connection.close();
    process.exit(0);
  })