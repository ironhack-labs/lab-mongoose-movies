require('dotenv').config();

const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const dbName = process.env.DBURL;
mongoose.connect(dbName);

const celebrities = [
  {
    name: "Lisa Kudrow",
    occupation: "Phoebe, de Friends",
    catchPhrase: "Me encantaría, pero no me apetece"
  },
  {
    name: "Matthew Perry",
    occupation: "Chandler, de Friends",
    catchPhrase: ""
  },
  {
    name: "Matt LeBlanc",
    occupation: "Joey, de Friends",
    catchPhrase: "¿Cómo va eso?"
  },
];

celebrities.collection.drop();

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log('Created ${celebrities.length} celebrities');
  //mongoose.disconnect();
});