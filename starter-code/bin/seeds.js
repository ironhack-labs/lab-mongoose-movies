const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');



const dbName = 'celeb'
mongoose.connect(`mongodb://localhost/${dbName}`)

const celebrities = [
  {
    name: 'Arnold Schwarzeneger',
    occupation: 'Actor',
    catchPhrase: "Sayonara, Baby"
  },
  {
    name: 'Bruce Lee',
    occupation: 'Actor',
    catchPhrase: "If you spend too much time thinking about a thing, you'll never get it done."
  },
  {
    name: 'Will Smith',
    occupation: 'Actor',
    catchPhrase: "Life is lived on the edge."
  },
]
Celebrity.create(celebrities)
  .then(celebrities => {
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close()
  })
  .catch(err => console.log('there was an error'))