const mongoose = require('mongoose');
const Celebrities = require('../models/Celebrities');
const {dbURL} = require('../config/db');

mongoose.connect(dbURL, {useMongoClient: true});


const celebrities = [{
  name       : "Edward Norton",
  occupation : "actor",
  catchPhrase: "Never talk about the Fight Club",
},
{
  name       : "LouisCK",
  occupation : "Comedian",
  catchPhrase: "The meal does not finish when I'm full",
},
{
  name       : "Ahmed the Dead Terrorist",
  occupation : "Toy",
  catchPhrase: "I kill you",
}];

Celebrities.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach(c => console.log(c.name));
  mongoose.connection.close();
});
