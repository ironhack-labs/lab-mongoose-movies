const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-movies', {useMongoClient: true});

// Linked to the "module.exports = Product;" line
// in "product.js"
const Celebrity = require('../models/celebrity')

// Products
const celebrities = [
    {
        name: 'Bruis Willis',
        occupation: 'Actor',
        catchPhrase: 'Unknown'
    },
    {
        name: 'Arnold Schwarzneger',
        occupation: 'Actor',
        catchPhrase: 'Asta la Vista'
    },
    {
        name: 'Tom Cruise',
        occupation: 'Actor',
        catchPhrase: 'Unknown'
    },
  ];

  // Save Fake Products to Database
  Celebrity.create(celebrities, (err, docs) => {
    if (err) {
        throw err;
    }

    docs.forEach((celebrity) => {
        console.log(celebrity.name);
    });
    mongoose.connection.close();
  });