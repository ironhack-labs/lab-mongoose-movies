require('dotenv').config();

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');


const dbName = process.env.DBURL;
mongoose.connect(dbName);

const celebrities = [
  {
    name: "Nicolas Cage",
    occupation: "actor",
    catchPhrase: "Sorry boss, but there is only two men I trust. One of them is me. The other is not you."
  },
  {
    name: "Robert De Niro",
    occupation: "actor",
    catchPhrase: "Time goes on. So whatever you are going to do, do it. Do it now. Do not wait"
  },
  {
    name: "Bob Marley",
    occupation: "singer",
    catchPhrase: "The good times of today, are the sad thoughts of tomorrow"
  }
]

Celebrity.create(celebrities, (err, data) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`);
});