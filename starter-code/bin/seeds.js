const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');




const celebritiesArr = [
    {
        name: 'Rihanna',
        occupation: 'Singer',
        catchPhrase: 'Badass bitch'
    },
    {
        name: 'Bill Gates',
        occupation: 'Philantropist',
        catchPhrase: 'Success is a lousy teacher'
    },
    {
        name: 'Emilia Clarke',
        occupation: 'Actress',
        catchPhrase: 'Laugh like a cartoon.'
    }
]

mongoose
    .connect('mongodb://localhost/starter-code', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

Celebrity.create(celebrities).then(() => {
    console.log(`Created ${celebrities.length} celebrities`);
    mongoose.connection.close();
  });

  module.exports = router;