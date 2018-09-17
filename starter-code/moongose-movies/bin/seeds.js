const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'celebridades';
mongoose.connect(`mongodb://localhost:27017/${dbName}`);

 const celebrities = [
  {
    name:'Link',
    occupation:'Héroe del tiempo',
    catchPhrase: 'Hup hup cheya HYAAAAT!!'
   },
  {
    name: 'Finn Mertens Campbell',
    occupation:'Héroe y aventurero',
    catchPhrase: 'Lanzo al cerditooou'
  },
  {
    name: 'Rick Sanchez',
    occupation:'Scientist, Inventor, Arms salesman',
    catchPhrase: 'Lick, lick lick my balls!'
  }
]


 Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});
