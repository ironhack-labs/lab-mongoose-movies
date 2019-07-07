const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbtitle = 'celebrity-lab';
mongoose.connect(`mongodb://localhost/${dbtitle}`);

const celebrities = [
  {
    name: 'Malandro Memo',
    occupation: 'Other',
    catchPhrase: 'Malandro é malandro, mané é mané.',
  },
  {
    name: 'Zé Carioca',
    occupation: 'Sambista',
    catchPhrase: 'Piu!',
  },
  {
    name: 'Nazareth Tedesco',
    occupation: 'Matemática',
    catchPhrase: 'Fica esperto nos degraus, parsa.',
  },
];

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});
