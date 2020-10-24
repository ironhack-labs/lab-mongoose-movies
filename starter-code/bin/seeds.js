const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'celebrity-project';
mongoose.connect(`mongodb://localhost/celebrity-project`, { useNewUrlParser: true, useUnifiedTopology: true } );

const celebrities = [
   {
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "Mission Impossible"
   },
   {
    name: "Shakira",
    occupation: "singer",
    catchPhrase: "Waka Waka"
   },
   {
    name: "Tom Holland",
    occupation: "actor",
    catchPhrase: "I don't feel well"
   }
];
Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close();
  });
