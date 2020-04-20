const Movie = require('../models/Movie')
const mongoose = require('mongoose')

const mockData = [
  // {
  //   name: 'Edu',
  //   occupation: 'NFL Player',
  //   catchPhrase: "'Till my bones colapse",
  // },
  // {
  //   name: 'Cantu',
  //   occupation: 'Youtuber',
  //   catchPhrase: 'Dale like',
  // },
  // {
  //   name: 'Ferras',
  //   occupation: 'TV Star',
  //   catchPhrase: 'Janeth Guadalupe Rosas alias la Mimosa',
  // },
  {
    title: 'LOL',
    genre: 'Videogames',
    plot: "Como hacer un Juego",
  },
  {
    title: 'Gladiador',
    genre: 'Drama',
    plot: 'Como un excomandante es traicionado por el hijo de su emperador',
  },
  {
    title: 'Infeccion',
    genre: 'Drama',
    plot: 'Como un virus infecta a medio mundo',
  },
]

mongoose
  .connect('mongodb://localhost/starter-code', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const moviesCreated = await Movie.create(mockData)
    const { length } = moviesCreated
    console.log(`${length} movies created`)
    mongoose.connection.close()
  })
  .catch((err) => console.log('Something went wrong', err))
