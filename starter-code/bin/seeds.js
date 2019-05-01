const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');



const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrity= [
  {
  name:"Pitbull",
  occupation: "Singer",
  catchPhrase: "Dalé"
  },
  {
    name:"Steve Carrell",
    occupation: "Actor",
    catchPhrase: "I am Michael Scott"
  },
  {
    name:"Chrissy Tiegen",
    occupation: "Model",
    catchPhrase: "blah blah blah"
  }
]
Celebrity.create(celebrity, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrity.length} celebrity`)
  mongoose.connection.close();
});
