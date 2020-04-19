const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Anne Jacqueline Hathaway",
    occupation: "actor",
    catchPhrase: "You cannot live your life to please others. The choice must be yours"
  },
  {
    name: "Madonna Louise Veronica Ciccone",
    occupation: "singer",
    catchPhrase: "I laugh at myself. I don’t take myself completely seriously. I think that’s another quality that people have to hold on to… you have to laugh, especially at yourself."
  },
  {
    name: "Will Smith",
    occupation: "actor",
    catchPhrase: "I wake up every morning believing today is going to be better than yesterday."
  }
];

Celebrity.create(celebrities, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close();
});


