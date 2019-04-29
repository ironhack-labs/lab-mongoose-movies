const mongoose = require('mongoose');
const celebrities = require('../models/celebrities');

const dbName = 'lab-mongoose-celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {name: "Nene Leakes",
  occupation: "realty star",
  catchPhrase: "I always spill the tea"
  },

  {name:"Heather Dubrow",
    occupation: "actress",
    catchPhrase: "I keep getting better"
    },

    {name: "MJ Javid",
      occupation:"reality star",
      catchPhrase: "I always get the best"
      }
]
//Call create function
celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close();
});