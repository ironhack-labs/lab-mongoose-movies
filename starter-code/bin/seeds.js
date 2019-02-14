const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Cam Chrome",
    occupation: "comedian",
    catchPhrase: "Gang Gang"
  },
  {
    name: "Vic Hick",
    occupation: "actor",
    catchPhrase: "Sup"
  },
  {
    name: "Niko Sneako",
    occupation: "singer",
    catchPhrase: "Always reload"
  }
];

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  //console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close();
});

