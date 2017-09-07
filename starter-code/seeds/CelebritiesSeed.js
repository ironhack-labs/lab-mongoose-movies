const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')
const {dbURL} = require('../config/db')

mongoose.connect(dbURL, {useMongoClient: true});

const celebrities = [
  {
    name: 'Paul Paul',
    occupation: 'Actor',
    catchPhrase: 'Holis'
  },
  {
    name: 'Bruce Dickinson',
    occupation: 'Singer',
    catchPhrase: 'Hell Yeah!'
  },
  {
    name: 'Arthur Aaronson',
    occupation: 'Actor',
    catchPhrase: 'Something'
  }
]

Celebrity.create(celebrities, (err, doc) => {
	if (err) { throw err}

  doc.forEach(celbr => console.log(celbr.name));
  mongoose.connection.close()
})
