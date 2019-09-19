
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);



const celebrities = [
  {
    name : "John Lennon",
    occupation : "singer",
    catchPhrase : "let it be"
  },
  {
    name : "Silvester Stalone",
    occupation : "actor",
    catchPhrase : "hit me in the face"
  },
  {
    name : "Kim Kardashian",
    occupation : "influencer",
    catchPhrase : "if not in(NBA,NFL,RAPPER) thow err"
  },

];

Celebrity.collection.drop();

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close();
});