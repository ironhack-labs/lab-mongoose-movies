const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'fake-celebrity';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "robert downey jr",
    ocupation: "Actor",
    catchPhrase: "we got a hulk"
  },
  {
    name: "Tom Cruise",
    ocupation: "Actor",
    catchPhrase: "Show me the money"
  },
  {
    name: "Jay z",
    ocupation: "Singer",
    catchPhrase: "Either love me or leave me alone"
  },
];


Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});
