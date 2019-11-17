const mongoose = require('mongoose')
const Celebrities = require('../models/celebrity');

const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);


const initialCelebrities = [{
    name: 'Tom Hardy',
    occupation: 'actor',
    catchPhrase: "This is Tom's catch phrase"
  },
  {
    name: 'Beyonce',
    occupation: 'singer',
    catchPhrase: "This is Beyonce's catch phrase"
  },
  {
    name: 'Rafa Nadal',
    occupation: 'tennis player',
    catchPhrase: "This is Rafa's catch phrase"
  }
]

Celebrities.create(initialCelebrities, (err) => {
    if (err) {
      throw err
    }
    console.log(`Created ${initialCelebrities.length} celebrities`)
    mongoose.connection.close;
  });