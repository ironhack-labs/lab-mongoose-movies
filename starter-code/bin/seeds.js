const mongoose = require ('mongoose');
const Celebrity = require ('../models/celebrity');

const dbName = 'Celebrity-project';

mongoose.connect(`mongodb://localhost/${dbName}`, {useNewUrlParser:true});
Celebrity.collection.drop();

const celebrities = [{
  name        : "Tom Cruuuus",
  occupation   : "actor",
  catchPhrase : "mission"
}, {
  name        : "john travolta",
  occupation   : "actor",
  catchPhrase : "greeease"
}, {
  name        : "jason statman",
  occupation   : "actor",
  catchPhrase : "yeah"
}]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close();
});