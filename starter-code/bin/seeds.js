const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'library-projectArtists';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: 'Tom Cruise',
    occupation: 'actor',
    catchPhrase: 'catchfhrase',
  },
  {    
    name: 'Silvester Stallone',
    occupation: 'actor',
    catchPhrase: 'catchfhrase',
  },
  {    
    name: 'Arnold Schwatzneger',
    occupation: 'actor',
    catchPhrase: 'Come with me if you wann live',
  },
];

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close();
});