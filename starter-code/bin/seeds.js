const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'lab-moongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);


const testing = [
  {
    name: "Sir Hans",
    occupation: "Tesla Man",
    catchPhrase: "How's it going bro?!"
  },
  {
    name: "Fabrico",
    occupation: "Beast Programmer",
    catchPhrase: "Very Easy"
  },
  {
    name: "Jesus",
    occupation: "Mankind Savior",
    catchPhrase: "What the fuck"
  }
]

Celebrity.create(testing, (err) =>{
  if(err) { throw(err) }
  console.log(`Created ${testing.length} testing`)
  mongoose.connection.close();
})

