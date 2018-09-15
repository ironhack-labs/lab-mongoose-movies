require('dotenv').config();
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');


mongoose.connect(process.env.DBURL, {useNewUrlParser: true});

const celebrities = [
  {
    name: 'Sasha Baron',
    occupation: 'Comedian',
    catchPhrase: 'Wicked'
  },
  {
    name: 'Travis Fimmel',
    occupation: "Acting",
    catchPhrase: 'No catch phrase'
  },
  {
    name: 'John Lennon',
    occupation: 'Music Composer',
    catchPhrase: 'Let it be | Imagine'
  }
]
Celebrity.collection.drop();


Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});