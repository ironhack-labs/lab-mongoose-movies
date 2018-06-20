const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
// const Author = require('../models/author');

const dbtitle = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbtitle}`);
Celebrity.collection.drop();
// Author.collection.drop();

const celebrities = [
  {
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "Mission Impossible"
  },
  {
    name: "Jackie Chan",
    occupation: "Actor",
    catchPhrase: "Drunken Master"
  },
  {
    name: "Vin Diesel",
    occupation: "Actor",
    catchPhrase: "Fast and Furious"
  }
];


Celebrity.create(celebrities)
  .then(celebrity => {celebrities.forEach(celebrity => console.log(`created ${celebrity.name}`));
    mongoose.connection.close( () => { 
      console.log('Mongoose connection disconnected successful!'); 
    });
  })
  .catch(error => {
    throw new Error(`Impossible to add the celebrity. ${error}`);
  });