const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebmovies', {useMongoClient: true});
const Celebrity = require('../models/celebrity');

const celebrityData = [
  {
  name : 'Ernesto Sevilla',
  occupation : 'showman',
  catchPhrase : 'Gañaaaaaaaaaan'
}, {
  name : 'CR7',
  occupation : 'model',
  catchPhrase : 'Siuuuu'
}, {
  name : 'Javier Clemente',
  occupation : 'exmanager',
  catchPhrase : 'Patapum parriba'
}
];

Celebrity.create(celebrityData, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((celebrity) => {
    console.log(celebrity.catchPhrase)
  });
  mongoose.connection.close();
});
