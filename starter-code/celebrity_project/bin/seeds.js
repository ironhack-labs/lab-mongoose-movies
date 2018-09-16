const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'celebrity_project';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "Nothing ends nicely, that's why it ends." 
  },
  {
    name: "Beyonce",
    occupation: "Singer",
    catchPhrase: "Power's not given to you. You have to take it."
  },
  {
    name: "Daffy Duck",
    occupation: "Animated cartoon character",
    catchPhrase: "Youuu're deththpicable!"
  }
]
Celebrity.collection.drop();

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});