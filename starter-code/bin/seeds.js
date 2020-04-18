const Celebrity = require('../models/Celebrity')
const mongoose = require('mongoose')

const mockData = [
  {
    name: 'Lana Del Rey',
    occupation: 'Singer',
    catchPhrase: 'Live fast. Die young. Be wild. Have fun.',
  },
  {
    name: 'Florence Welch',
    occupation: 'Singer',
    catchPhrase: 'Maybe I’ve always been more comfortable in chaos.”',
  },
  {
    name: 'Kaya Scodelario',
    occupation: 'Actor',
    catchPhrase: "I wasn't good at anything very much at school, but I did like drama",
  },
]
mongoose
  .connect('mongodb://localhost/celebrities', { useNewUrlParser: true, useUnifiedTopology: true })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    Celebrity.create(mockData).then((res) => console.log('Data in DB'))
  })

  .catch((err) => {
    console.error('Error connecting to mongo', err)
  })
