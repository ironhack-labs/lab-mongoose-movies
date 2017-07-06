const Celebrity = require('../models/Celebrity');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/lab-mongoose-movies')
  .then(() => {
    let celebritiesArray = [{
        name: 'Lila',
        occupation: 'Corner singer',
        cathFrase: 'you better not take my spot',
      },
      {
        name: 'Melina',
        occupation: 'porn star',
        cathFrase: 'better inside than out',
      },
      {
        name: 'Luke',
        occupation: 'celebrity clown',
        cathFrase: 'partys make me sad',
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
