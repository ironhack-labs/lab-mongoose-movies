const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [

  {
    name: "Rick Sanchez",
    occupation: "Scientist",
    catchphrase: "Wubba lubba dub dub!"
  },
  {
    name: "Morty Smith",
    occupation: "Sidekick",
    catchphrase: "Geez Rick..."
  },
  {
    name: "Squanchy",
    occupation: "Squancher",
    catchphrase: "Squanch squanch..."
  }
  
];

Celebrity.create(celebrities, () => {
  console.log("Celebrities uploaded successfully");
  mongoose.connection.close();
});