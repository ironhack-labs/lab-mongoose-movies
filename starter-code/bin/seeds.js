const mongoose = require('mongoose')
const Celebrity = require('./../models/Celebrity')
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
    title: 'Bad Boys para siempre',
    genre: 'action',
    plot: 'Los policías de la vieja escuela Mike Lowery y Marcus Burnett vuelven a patrullar juntos para derrotar al líder vicioso de un cartel de drogas de Miami. El recién creado equipo de élite AMMO del departamento de policía de Miami junto con Mike y Marcus se enfrentan al despiadado Armando Armas.'
  },
  {
    title: 'Dolittle',
    genre: 'Fantasia/accion',
    plot: 'El Dr. John Dolittle vive solo detrás de los muros de su exuberante mansión en la Inglaterra del siglo XIX. Su única compañía proviene de una variedad de animales exóticos con los que habla a diario. Pero cuando la joven reina Victoria se enferma gravemente, el médico excéntrico y sus amigos peludos se embarcan en una aventura épica en una isla mítica para encontrar la cura.'
  },
  {
    title: '1917',
    genre: 'Drama/accion',
    plot: 'La película sigue a dos jóvenes soldados británicos a lo largo de un único día en lo más crudo de la Primera Guerra Mundial.'
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