const mongoose = require('mongoose');
const Celebrity = require('../models/celebrities');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);


const celebrities = [
  {
    name : 'Dani de la Pradera',
    occupations: 'Programador creativo' ,    
    catchPhrase: 'Se pueden hacer cosas supercreativas'
  },
  {
    name : 'David in the night',
    occupations: 'Pelo searcher' ,    
    catchPhrase: 'Adoro los besos de Zenchy'
  },
  {
    name : 'Ruben abstemio',
    occupations: 'Huidor de Zenchy' ,    
    catchPhrase: 'Es todo una pose, lo adoro'
  }
  
  
];

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});
