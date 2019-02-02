const mongoose = require('mongoose');
const Celebrity = require('../models/celebrities');

const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "Show me the money",
  },
  {
    name: "Michelle Monaghan",
    occupation: "Actor",
    catchPhrase: "If you're gonna be two-faced at least make one of them pretty"
  },
  {
    name: "Henry Cavill",
    occupation: "Actor",
    catchPhrase: "Life is like an onion; you peel off one layer at a time and sometimes you weep"
  },
  {
    name: "Will Smith",
    occupation: "Actor",
    catchPhrase: "Too many people spend money they haven't earned, to buy things they don't want, to impress people they don't like"
  },
  {
    name: "Martin Lawrence",
    occupation: "Actor",
    catchPhrase: "Life is like a taxi. The meter just keeps a-ticking whether you are getting somewhere or just standing still"
  },
  {
    name: "Vanessa Hudgens",
    occupation: "Actor",
    catchPhrase: "The secret of staying young is to live honestly, eat slowly, and lie about your age"
  }
];

Celebrity.create(celebrities, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${celebrities.length} movies`)
  mongoose.connection.close()
});