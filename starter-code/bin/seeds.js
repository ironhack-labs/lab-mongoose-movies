
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
//const Author = require('../models/author.model');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);
Celebrity.collection.drop();
//Author.collection.drop();

const celebrity = [{
  name: "Denzel Washington",
  occupation: "Actor",
  catchPhrase: "Do what you have to do , to do what you want to do",
},
{
  name: "Heath Ledger ",
  occupation: "Actor",
  catchPhrase: "Why so seryous?",
},
{
  name: "Jake Gyllenhaal",
  occupation: "Actor",
  catchPhrase: "Sometimes love is calm and easy and sometimes it’s just plain dirty.",
}
]

Celebrity.create(celebrity, (err) => {
  if (err) {
    throw (err)
  }
  console.log(`Created ${celebrity.length} celebryties`)
  mongoose.connection.close();
});