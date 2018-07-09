const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebs = [
  {
    name: "Kevin",
    occupation: "Minion",
    catchPhrase: "Bello!"
  },
  {
    name: "Stuart",
    occupation: "Minion",
    catchPhrase: "Bee Do Bee Do Bee Do!"
  },
  {
    name: "Bob",
    occupation: "Minion",
    catchPhrase: "Para tu"
  }
];

Celebrity.create(celebs)
  .then((result) => {
    console.log(`${result.length} elements added to db.`);
    mongoose.disconnect();
  })
  .catch((err) => {
    console.log(err);
})