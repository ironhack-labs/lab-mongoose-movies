const mongoose = require('mongoose');
const Celeb = require('../models/celebrity');
mongoose.connect('mongodb://localhost/lab-mongoose-movies');

const celebrities = [
{
    name: 'Jon Snow',
    occupation: 'Knight',
    catchPhrase: 'Winter is coming'
},

{
    name: 'Travis Scott',
    occupation: 'Artist',
    catchPhrase: "It's Lit"
},

{
    name: 'Muhammad Ali',
    occupation: 'Professional Boxer',
    catchPhrase: 'Float like a Butterfly sting like a Bee'
}

]

Celeb.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close();
  });