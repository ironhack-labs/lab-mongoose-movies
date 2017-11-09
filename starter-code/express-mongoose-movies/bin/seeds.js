// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express-mongoose-movies', {useMongoClient: true});
const Celebrity = require('../models/celebrity');

const celebrityData = [
  {
  name: 'Snoop Dogg',
  occupation: 'Hip-Hop artist',
  imgUrl: 'https://e.snmc.io/lk/f/a/676e53ac74df958ecef2b32e416f5ee8/1133746.jpg',
  alive: true,
  catchPhrase: 'Fo shizzle'
}, {
  name: 'Tupac Shakur',
  occupation: 'Hip-Hop artist',
  imgUrl: 'http://img.quotery.com/pictures/2013/12/tupac-shakur.jpg',
  alive: false,
  catchPhrase: 'You gotta be able to smile through the bullshit'
}, {
  name: 'Kanye West',
  occupation: 'Hip-Hop artist',
  imgUrl: 'http://www.yoraps.com/wp-content/uploads/2016/01/Kanye-West-300x300-3.png',
  alive: true,
  catchPhrase: 'Living well eliminates the need for revenge'
}
];

Celebrity.create(celebrityData, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((celebrity) => {
    console.log(celebrity.name)
  });
  mongoose.connection.close();
});
