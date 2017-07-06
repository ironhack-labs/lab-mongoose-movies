const Celebrity = require('../models/Celebrity');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/lab-mongoose-movies')
  .then(() => {
    let celebritiesArray = [{
        name: 'Lila',
        occupation: 'Corner singer',
        catchFrase: 'you better not take my spot',
      },
      {
        name: 'Melina',
        occupation: 'porn star',
        catchFrase: 'better inside than out',
      },
      {
        name: 'Luke',
        occupation: 'celebrity clown',
        catchFrase: 'partys make me sad',
      },
    ];

    Celebrity.create(celebritiesArray, (err, celebs) => {
      if (err) {
        throw err;
      }

      celebs.forEach( celebrity => {
        console.log(`you have added a new celebrity: ${celebrity.name}`);
      });
      mongoose.connection.close();
    });
  });
