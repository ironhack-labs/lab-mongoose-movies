const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.js');


const dbName = 'starter';
mongoose.connect(`mongodb://localhost/${dbName}`);


const celebrities = [
  {
    name: 'John Cena',
    occupation: 'Wrestler Badman',
    catchPhrase: 'JOHHHNNN CENNNNAA!'
  },
  {
    name: 'Brian Cranston',
    occupation: 'Chemist',
    catchPhrase: 'Say my name!'
  },
  {
    name: 'Rita Ora',
    occupation: 'Sub-Stanard Singer',
    catchPhrase: 'Ugnhhhhh!'
  }
];

Celebrity.create(celebrities)
.then(celebrities => {
  console.log(`Database updated with ${celebrities.length} celebs!`);
});

