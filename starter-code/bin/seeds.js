const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')
//const Movie = require('../models/Movie')

const celebritySchema = [{
  name:'John Cena',
  occupation:'actor',
  catchPhrase: `Let's do this`
}, {
  name: 'Cuahtemoc Blanco',
  occupation:'actor',
  catchPhrase: `jalojalojalo`
}, {
  name: 'Galilea Montijo',
  occupation: 'actor',
  catchPhrase: 'ayayaya'
}]

const movieSchema = [{
  title: 'Nosotros los nobles',
  genre: 'Comedy',
  plot: 'Rich family to poor to rich again'
}, {
  title: 'Interstellar',
  genre: 'Drama',
  plot: 'Space travel drama for physics fans, specially string theory purists'
}, {
  title: 'The cloverfield paradox',
  genre: 'Drama',
  plot: 'Space travel drama for physics fans, specially multiverse theory purists'
}]

mongoose
  .connect('mongodb://localhost/starter-code', {
    useNewUrlParser: true
  })
  .then(async () => {
    const moviesList = await Movie.create(movieSchema);
    console.log(`${moviesList.length} movies created.`)
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });