//Create an array of 3 objects, each with name, occupation and catchPhrase for our initial celebrities.
// Call the Celebrity model's create method with the array as argument.
// In the create method's callback, display feedback.
// Run the seed file with node to seed your database.
// Check the database with the mongo command to confirm that your data was saved.


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrities-example', {useMongoClient: true});
const Celebrity = require('../models/celebrity');

const celebrities = [
  {
name       : "Jessica",
ocupation      : "Actress",
catchPhrase   : "I'm divine",
  },
  {
    name       : "Marc",
    ocupation      : "Actor",
    catchPhrase   : "I'm tough",
  },
  {
    name       : "Jon",
    ocupation      : "Director",
    catchPhrase   : "I'm rude",
  }
];

Celebrity.collection.drop();

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((cel) => {
    console.log(cel.name)
  });

  mongoose.connection.close();
});
