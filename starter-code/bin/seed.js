const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrityList = [{
  name: 'SnoopyDog',
  occupation: 'house-security',
  catchPhrase: 'au-au',
}, {
  name: 'Pluto',
  occupation: 'dog-hacker',
  catchPhrase: 'hello DOG world!',
}, {
  name: 'Lessie',
  occupation: 'baby-sitter',
  catchPhrase: 'Dont cry, baby!',
}];

Celebrity.create(celebrityList, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${celebrityList.length} au-au-celebrities`);
  mongoose.connection.close();
});
