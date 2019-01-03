const mongoose = require('mongoose');

const Celebrity = require('../models/celebrity')

const dbName = 'lab-mongoose-movies';

mongoose.connect(`mongodb://localhost/${dbName}`);



const celebrities = [
  {
    name: 'Arnold Schwarzenegger',
    occupation: 'Terminator',
    catchPhrase: "I'll be back"
  },
  {
    name: 'Silvester Stallone',
    occupation: 'Boxer',
    catchPhrase: "Adriaan!"
  },
  {
    name: 'Marlon Brando',
    occupation: 'Godfother',
    catchPhrase: "I'll make an offer the can't refuse!"
  }
]

Celebrity.create(celebrities, (err)=>{
  if(err) {throw(err)}
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close()
})
