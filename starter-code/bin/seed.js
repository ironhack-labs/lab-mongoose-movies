const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');
mongoose.connect('mongodb://localhost/celebrities-db')

// An Array with 3 Objects(the celebrities)
const celebrities = [
  // Celebrity #1
  {  
    name:         'Nolan Arenado',
    occupation:   'Baseball Player',
    catchPhrase:  'Batter Up!'
  },

  // Celebrity #2
  {  
    name:         'Matthew McConaughey',
    occupation:   'Actor',
    catchPhrase:  'Alright Alright Alright!'
  },

  // Celebrity #3
  {  
    name:         'Tom Hanks',
    occupation:   'Actor',
    catchPhrase:  'WILSON!!!'
  }
];

Celebrity.create(celebrities, (err) => {
  if(err) {throw (err)};
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
})
