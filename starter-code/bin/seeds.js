const Celebrity = require('../models/Celebrity')
const mongoose = require('mongoose')

const mockData = [
  {
    name: 'Edu',
    occupation: 'NFL Player',
    catchPhrase: "'Till my bones colapse",
  },
  {
    name: 'Cantu',
    occupation: 'Youtuber',
    catchPhrase: 'Dale like',
  },
  {
    name: 'Ferras',
    occupation: 'TV Star',
    catchPhrase: 'Janeth Guadalupe Rosas alias la Mimosa',
  },
]

mongoose
  .connect('mongodb://localhost/starter-code', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const celebritiesCreated = await Celebrity.create(mockData)
    const { length } = celebritiesCreated
    console.log(`${length} celebrities created`)
    mongoose.connection.close()
  })
  .catch((err) => console.log('Something went wrong', err))
