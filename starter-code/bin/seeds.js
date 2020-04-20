require('dotenv').config()

const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')
const mongoose = require('mongoose')

// const data = [
//   {
//     name: 'Chuck Norris',
//     occupation: ['God', 'Divinity', 'Actor', 'Humble'],
//     catchPhrase: 'I am God',
//   },
//   {
//     name: 'Keanu Reeves',
//     occupation: ['Kind', 'Actor', 'Sun'],
//     catchPhrase: 'Humility above all',
//   },
//   {
//     name: 'Chabelo',
//     occupation: ['Comeidan', 'Actor', 'Immortal'],
//     catchPhrase: 'Enjoy...life is short',
//   },
// ]

const data = [
  {
    title: 'El Santo contra las Momias de Guanajuato',
    genre: ['Comedy', 'Drama', 'Terror'],
    plot: 'Santo peleando contra Momias',
  },
  {
    title: 'Matrix',
    genre: ['Drama', 'Ficcion'],
    plot: 'Se meten el las compus',
  },
  {
    title: 'Cualquiera',
    genre: ['SciFi', 'Romanticism'],
    plot: 'La neta se me acabaron las ideas',
  },
]

// mongoose
//   .connect(process.env.DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(async () => {
//     const celebritiesCreated = await Celebrity.create(data)
//     const { length } = celebritiesCreated
//     console.log(`${length} celebrities created`)
//     mongoose.connection.close()
//   })
//   .catch((err) => console.log('Something went wrong', err))

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const moviesCreated = await Movie.create(data)
    const { length } = moviesCreated
    console.log(`${length} movies created`)
    mongoose.connection.close()
  })
  .catch((err) => console.log('Something went wrong', err))
