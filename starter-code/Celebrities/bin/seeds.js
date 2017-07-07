const Celebrity = require('../models/Celebrity');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrities')
  .then(() => {
    let celebrities = [{
        name: 'Beyoncé',
        occupation: 'Singer',
        catchPhrase: 'Embrace your narcisismo',
      },
      {
        name: 'Rihanna',
        occupation: 'Singer',
        catchPhrase: 'Why did you think Id care?',
      },
      {
        name: 'Kim Kardashian',
        occupation: 'Influencer',
        catchPhrase: 'I cant take this anymore',
      }
    ];

    let celebritiesObj = celebrities.map(p => new Celebrity(p));
    celebritiesObj.forEach(p => p.save((err, obj) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`New celebrity created [${obj.name}] with ID:${obj._id}`);
      }
    }));
  });
