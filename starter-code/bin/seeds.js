const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name : "Scarlett Johansson",
    occupation: "Actress",
    catchPhrase: "Will you, if you dont mind, marry me?"
  },
  {
    name : "Javier Bardem",
    occupation: "Serial Killer",
    catchPhrase: "You need to call it. I can't call it for you. It wouldn't be fair."
  },
  {
    name : " Myroslav Slaboshpytskyi",
    occupation: "Director",
    catchPhrase: "Silent is golden"
  },
];

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} movie`)
  mongoose.connection.close()
});
