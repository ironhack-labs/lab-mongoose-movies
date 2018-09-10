
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'library-application';
mongoose.connect(`mongodb://localhost/${dbName}`);


const celebrities = [
    {
      name: 'Kikay',
      occupation: 'Money maker',
      catchPhrase: 'Ill beat you with my money.'
    },
    {
        name: 'Covvoy',
        occupation: 'Street walker',
        catchPhrase: 'I dont know what Im doing here.'
    },
    {
        name: 'Matrix',
        occupation: 'Hacker',
        catchPhrase: 'You dont know me but I know you, you better change your password.'
    },
    {
        name: 'Cazxy',
        occupation: 'Programmer',
        catchPhrase: 'Ill make the world run.'
    },
  ]
  
  Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close()
  });