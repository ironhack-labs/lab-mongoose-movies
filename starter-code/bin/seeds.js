const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const celebrities = [
    {
      name: "Tom Cruise",
      occupation: "actor",
      catchPhrase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        name: "Beyoncé",
        occupation: "singer",
        catchPhrase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    },
    {
        name: "Daffy Duck",
      occupation: "duck",
      catchPhrase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }
]
Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close();
});