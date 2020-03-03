const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

mongoose
  .connect('mongodb://localhost/celebrities-project', {useNewUrlParser: true});

const celebrities = [
    {
      name: "Popeye",
      occupation: "Sailor",
      catchPhrase: "lorem ipsum"
    },
    {
      name: "Donald Trump",
      occupation: "Prime Minister",
      catchPhrase: "lorem ipsum"
    },
    {
      name : "Bob Marley",
      ocuppation: "Musician",
      catchPhrase: "lorem ipsum"
    }
  ];

Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} movies`);
  mongoose.connection.close();
});