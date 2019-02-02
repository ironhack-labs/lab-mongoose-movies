const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'celebrity-project';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true });

const celebrities = [
  {
    name: "Michael Jackson",
    occupation: "singer",
    catchPhrase: "Shamona"
  },
  {
    name: "Harry Potter",
    occupation: "unknown",
    catchPhrase: "Hex Hex"
  },
  {
    name: "Michael Schumacher",
    occupation: "unknown",
    catchPhrase: "Brumm Brumm"
  }
];

Celebrity.deleteMany()
.then ( () => {
  Celebrity.create(celebrities, (err) => {
    if (err) { throw(err); }
    console.log(`Created ${celebrities.length} Celebrities`);
    mongoose.connection.close();
  });
});