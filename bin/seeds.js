/* jshint esversion: 6 */

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
mongoose.connect('mongodb://localhost/mongoose-movies');

const celebrities = [{
    name: 'Mike Tyson',
    occupation: 'Boxer',
    catchPhrase: "Put your mother in a straight jacket!"
  },
  {
    name: 'Charles Barkley',
    occupation: 'Basketball Player',
    catchPhrase: 'It was turrrble, Ernie!'
  },
  {
    name: "Christine O'Donnell",
    occupation: 'Politician',
    catchPhrase: 'I am not a witch.'
}];

Celebrity.create(celebrities, (err, docs) => {
  if (err) console.log(err);
  docs.forEach((doc) => {
    console.log(doc);
  });
});

mongoose.connection.close();
