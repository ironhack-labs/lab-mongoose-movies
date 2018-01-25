const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-movie');

const Celebrity = require('../models/celebrity');

const celebrities = [
  { name: 'Manu', occupation: 'actor', catchPharse: 'Gotta Catch Em All' },
  { name: 'Lidia', occupation: 'singer', catchPharse: 'Living la vida loca' },
  { name: 'Cova', occupation: 'comedian', catchPharse: 'Guau!' },
];

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    console.log('err: ', err);
  } else {
    docs.forEach((doc, index) => {
      console.log(`doc ${index} inserted ${doc.name}`);
    });
  }
});