const Celebrity = require('../models/celebrity');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongoose-movies')
  .then(() => {
    let celebrities = [{
        name: 'John McJohnson',
        occupation: "Singer",
        catchPhrase: "Im to hot for this world"
      },
      {
        name: 'Mark Markovic',
        occupation: 'Actor',
        catchPhrase: 'Just because i´m famous im not smart'
      },
      {
        name: 'Marina Mariner',
        occupation: 'Painter',
        catchPhrase: 'I love to paint dogs'
      },
    ];

    let celebritiesObj = celebrities.map(c => new Celebrity(c));

    celebritiesObj.forEach((c, index, array) => c.save((err, obj) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`New celebrity in the db. Id: ${obj._id}`);
      }
      if (index === array.length - 1) mongoose.disconnect();
    }));
  });
