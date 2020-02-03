const mongoose = require('mongoose')
const Celebrity = require('./../model/Celebrity')
const Movie = require('./../models/Movie')

const data = [
  {
    name: "Tom Cruise",
    occupation: "actor",
    catchPhrase: 'CatchPhrase'
  },
  {
    name: "Beyonce",
    occupation: "singer",
    catchPhrase: 'CatchPhrase'
  },
  {
    name: "Daffy Duck",
    occupation: "comedian",
    catchPhrase: 'CatchPhrase'
  }
]

const dataMovie = [
  {
    title: 'cars',
    genre: 'animation',
    plot: 'Los policías de la vieja escuela Mike Lowery y Marcus Burnett vuelven a patrullar juntos para derrotar al líder vicioso de un cartel de drogas de Miami. El recién creado equipo de élite AMMO del departamento de policía de Miami junto con Mike y Marcus se enfrentan al despiadado Armando Armas.'
  },
  {
    title: 'the revenant',
    genre: 'accion',
    plot: 'la historia de un nombre que lucha'
  },
  {
    title: 'laland',
    genre: 'Drama/accion',
    plot: 'busqueda del amor'
  }
]
mongoose
  .connect('mongodb://localhost/mongoose-movies', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    Celebrity.create(data).then(res => console.log('Data in DB'))
    Movie.create(dataMovie).then( res => console.log('Movies data ready in DB')
    )
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });