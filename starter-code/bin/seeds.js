const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);




const celebrities = [
  {
    name : "test",
    occupation: "testo",
    catchPhrase: "testc"
  },
  {
    name : "test1",
    occupation: "test1o",
    catchPhrase: "test1c"
  },
  {
    name : "test2",
    occupation: "test2o",
    catchPhrase: "test2c"
  },
];

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} movie`)
  mongoose.connection.close()
});
