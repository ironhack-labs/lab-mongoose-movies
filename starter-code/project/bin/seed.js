require('dotenv').config();

const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');


const dbName = process.env.DBURL;
mongoose.connect(dbName);

const celebrities = [
  {
    name: "Antoine Bublé",
    occupation : "Buen señor",
    catchPhrase: "Soy el rey del cotarro"
  },
  {
    name: "Sofía Santana",
    occupation : "Influencer",
    catchPhrase: "Menos es más, siempre y por siempre"
  },
  {
    name: "Blibli blabla",
    occupation: "unknown",
    catchPhrase: "Blibli blabla bloblo blublu bleble"
  }
]

Celebrity.collection.drop();

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  
  console.log(`Created ${celebrities.length} celebrities`);
});

