const Celebrity = require('../models/Celebrity');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongoose-celebrities')
  .then(() => {
    let celebrities = [{
        name: 'José María Aznar',
        occupation: 'English teacher',
        catchPhrase: 'Estamos trabajando en ello'
      },
      {
        name: 'Felipe González',
        occupation: 'Chinese vase',
        catchPhrase: 'Por consiguiente'
      },
      {
        name: 'Juan Carlos',
        occupation: 'Emeritus badass',
        catchPhrase: 'Me llena de orgullo y satisfacción'
      }
    ];

    let celebObj = celebrities.map(c => new Celebrity(c));

    celebObj.forEach((c, index, array) => c.save((err, obj) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`A new star is born Id: ${obj._id}`);
      }
      if (index === array.length - 1) mongoose.disconnect();
    }));
  });
