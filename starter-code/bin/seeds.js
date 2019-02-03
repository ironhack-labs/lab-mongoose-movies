const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbtitle = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbtitle}`,{ useNewUrlParser: true });

const celebrities = [
    {
        name: 'Julia Roberts',
        occupation: 'actress',
        catchPhrase: 'whatever',
    },
    {
        name: 'John Mayer',
        occupation: 'singer',
        catchPhrase: 'unknown',
    },
    {
        name: 'Matthew McConaughey',
        occupation: 'comedian',
        catchPhrase: 'alright alright alright',
    }
]

Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close()
  });