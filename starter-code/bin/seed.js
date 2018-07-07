require('dotenv').config();

const mongoose = require('mongoose');
const Celebritie = require('../models/Celebritie');

const dbName = process.env.DBURL;
mongoose.connect(dbName);

const Celebrities = [
  {
    name: 'David Broncano',
    occupation: 'Late Night Showman',
    catchPhrase: `PERO Q'APACHAOOOO?!?`
  },
  {
    name: 'Ignatius Farray',
    occupation: 'StandUp Comedy Artist',
    catchPhrase: `All Right!`
  },
  {
    name: 'Quequé',
    occupation: 'StandUp Comedy Artist',
    catchPhrase: `Soy tu futuro`
  }
]

Celebritie.collection.drop();

Celebritie.create(Celebrities, (err, data) => {
  if (err) { throw(err) }
  
  console.log(`Created ${Celebrities.length} Celebrities`);
});