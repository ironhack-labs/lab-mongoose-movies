const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrity = [
  {
    name: "Joey Tribbiani",
    occupation: "Actor",
    catchPhrase: "How YOU doin",
  },
  {
    name: "Sheldon Cooper",
    occupation: "Unknown",
    catchPhrase: "Bazinga!",
  },
  {
    name: "Barney Stinson",
    occupation: "Comedian",
    catchPhrase: "Suit up!",
  },
]

Celebrity.create(celebrity, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrity.length} celebrity`);
  mongoose.connection.close();
});