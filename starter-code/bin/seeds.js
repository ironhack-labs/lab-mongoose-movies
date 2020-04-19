require('dotenv').config()

const Celebrity = require('../models/Celebrity')
const mongoose = require('mongoose')

const data = [
  {
    name: 'Chuck Norris',
    occupation: ['God', 'Divinity', 'Actor', 'Humble'],
    catchPhrase: 'I am God',
  },
  {
    name: 'Keanu Reeves',
    occupation: ['Kind', 'Actor', 'Sun'],
    catchPhrase: 'Humility above all',
  },
  {
    name: 'Chabelo',
    occupation: ['Comeidan', 'Actor', 'Immortal'],
    catchPhrase: 'Enjoy...life is short',
  },
]

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const celebritiesCreated = await Celebrity.create(data)
    const { length } = celebritiesCreated
    console.log(`${length} celebrities created`)
    mongoose.connection.close()
  })
  .catch((err) => console.log('Something went wrong', err))
