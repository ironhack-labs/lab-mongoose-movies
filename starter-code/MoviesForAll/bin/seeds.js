const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MoviesForAll', {useMongoClient: true});
const Celebrity = require('../models/celebrity');



const celebrities = [
  {
    name       : 'James Bond',
    occupation : 'Actor',
    catchPhrase: 'Bond, James bond',
},
{
  name       : 'AR Rahman',
  occupation : 'musician-singer',
  catchPhrase: 'Your best success comes after your greatest disapponitment',

},
{
  name       : 'Anjelina Jolie',
  occupation : 'Actor',
  catchPhrase: 'I am a strong believer that without justice, there is no peace. No lasting peace, anyway.',

},
];

Celebrity.create(celebrities, (err,docs) => {
  if (err) {
    throw err;
  }
  docs.forEach((celebrities) => {
    console.log(celebrities.name)
  });
  mongoose.connection.close();
});
