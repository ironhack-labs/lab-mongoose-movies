const mongoose = require('mongoose');
const Celebrity = require ("../models/celebrity");
mongoose.connect('mongodb://localhost/celebrities')
  .then(() => {
    let celebrities = [
      {
        name: 'John John Florence',
        occupation: 'Pro Surfer',
        cathPhrase: 'I am the champion'
      },
      {
        name: 'Steve Jobs',
        occupation: 'Is dead',
        cathPhrase: 'Ah, and one more thing'
      },
      {
        name: 'Marc Pomar',
        occupation: 'The Big Teacher',
        cathPhrase: 'Es de perdedores'
      }
    ];
    let celebritiesObj = celebrities.map(c => new Celebrity(c));
    celebritiesObj.forEach(c => c.save ( (err, obj) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`
          Created celebritie: ${obj.name}
          with occupation:    ${obj.occupation}
          and phrase:         ${obj.cathPhrase}`);
      }
    }));
  });
