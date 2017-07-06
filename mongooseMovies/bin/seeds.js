
const Celebrity = require('../models/celebrity.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongoosemovies');

let celebrityArray = [
{
  name: "Julio Iglesias",
  occupation: "singer",
  catchPhrase: "Tienes que repasar JS...y lo sabes!"
},
{
  name: "Arnold Schwarzenegger ",
  occupation: "actor",
  catchPhrase: "Hasta la vista baby"
},
{
  name: "Homer Simpson",
  occupation: "cartoon",
  catchPhrase: "D'oh!"
}
];

Celebrity.create(celebrityArray, (err, celebridades) => {
  if (err) {
    console.log(err);
  }
  celebridades.forEach((c) => {
    console.log(`Se ha creado ${c._id}`);
  });
  mongoose.connection.close();
});
