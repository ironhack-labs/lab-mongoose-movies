const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebs = [{
  name: 'Tom Cruise',
  occupation: 'Actor',
  catchPhrase: 'Gooooo Scientology!'
},
{
  name: 'Beyoncé',
  occupation: 'Musician',
  catchPhrase: 'Flawless'
},
{
  name: 'Neko Case',
  occupation: 'Musician',
  catchPhrase: "my courage is roaring like the sound of the sun / 'Cause it's vain about its mane and will reveal them to no one / I'm an animal, you're an animal, too"
}];

Celebrity.create(celebs, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebs.length} celebrities`)
  mongoose.connection.close();
});

const movies = [{
  title: '',
  genre: '',
  plot: '',
  pictureUrl: '',
  actors: []
}, 
{
  title: '',
  genre: '',
  plot: ''
}];