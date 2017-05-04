const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/celebritymovies');

// const Product = require('../models/product-model.js');
const Celebrity = require('../models/celebrity-model.js');

const celebrities = [
  {
    name: 'Beck',
    occupation: 'musician/altruistic genius',
    catchPhrase: 'que onda guero',
  },
  {
    name: 'Damien LeRoy',
    occupation: 'surfer/kiteboarder',
    catchPhrase: 'Try Hydrofoil today!',
  },
  {
    name: 'Andrew Muse',
    occupation: 'snowboarder/van life traveler',
    catchPhrase: 'Ski Utah!',
  },
  {
    name: 'Beat Connection',
    occupation: 'indie band',
    catchPhrase: 'Stream, download, and buy Product3!',
  }
];

Celebrity.create(celebrities, (err, celebrityDocs) => {
  if (err) {
    throw err;
  }

  celebrityDocs.forEach((oneCelebrity) => {
    console.log(`NEW PRODUCT ${oneCelebrity.name} -> ${oneCelebrity._id}`);
  });
});
