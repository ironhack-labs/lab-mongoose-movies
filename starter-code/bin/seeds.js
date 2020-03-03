const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

mongoose
  .connect('mongodb://localhost/celebrities-project', {useNewUrlParser: true});

const celebrities = [
    {
      name: "Popeye",
      occupation: "Sailor",
      catchPhrase: "I yam what I yam an' tha's all I yam"
    },
    {
      name: "Donald Trump",
      occupation: "President of the USA",
      catchPhrase: "Make America Great Again"
    },
    {
      name : "Bob Marley",
      ocuppation: "Musician",
      catchPhrase: "No Woman no cry"
    }
  ];

Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});