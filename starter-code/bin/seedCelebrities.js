const mongoose = require("mongoose")
const Celebrity = require('../models/celebrity.model')

const dbName = 'celebrity-app-web1019'
mongoose.connect(`mongodb://localhost/${dbName}`)
Celebrity.collection.drop()

const celebrities = [
  {
    name: 'Jennifer Aniston',
    occupation: ['actress', 'film producer', 'businesswoman'],
    catchPhrase: 'I love to read about what my love life is really about'
  },
  {
    name: 'Elizabeth Hurley',
    occupation: ['businesswoman', 'actress', 'model'],
    catchPhrase: 'A bit of lusting after someone does wonders for the skin'
  },
  {
    name: 'Scarlett Johansson',
    occupation: ['actress', 'singer'],
    catchPhrase: 'I still eat a burger at a counter with ketchup dripping down my face.'
  },
  {
    name: 'Julia Roberts',
    occupation: ['actress', 'producer'],
    catchPhrase: `True love doesn't come to you it has to be inside you`
  }
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw err }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
})

