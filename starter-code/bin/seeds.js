const mongoose = require('mongoose')
const Celebrity = require('./../models/Celebrity')


const data = [{
    name: "Ryan Reynolds",
    occupation: "actor",
    catchPhrase: 'CatchPhrase'
  },
  {
    name: "Kevin Hart",
    occupation: "comedian",
    catchPhrase: 'CatchPhrase'
  }, {
    name: "Anne Hathaway",
    occupation: "Actriz",
    catchPhrase: 'CatchPhrase'
  },
]

const dataMovie = [{
    title: 'DEADPOOL 2',
    genre: 'Fantasia/accion',
    plot: 'Deadpool debe proteger a Russell de Cable, un soldado del futuro geneticamente modificado'
  },
  {
    title: 'RIDE ALONG',
    genre: 'Policiaco/accion',
    plot: 'Un policia veterano y su futuro cuñado, un recluta que habla muy rapido, se enfrentan al criminal mas peligroso de Atlanta'
  },
  {
    title: 'THE INTERN',
    genre: 'Drama/comedia dramatica',
    plot: 'Un hombre viudo de 70 años, revoluciona un negocio online decidado al mundo de la moda cuando comienza a trabajar alli, volviendose indispensable y muy querido.'
  }
]
mongoose
  .connect('mongodb://localhost/mongoose-movies', {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    Celebrity.create(data).then(res => console.log('Data in DB'))
    Movie.create(dataMovie).then(res => console.log('Movies data ready in DB'))
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });