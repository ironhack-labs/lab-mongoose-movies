const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');


mongoose.connect(`mongodb://localhost/celebrities-dev`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const celebrities = [{
        name: 'Michael Douglas',
        occupation: 'actor',
        catchPhrase: 'work as much as you wish'
    },
    {
        name: 'Bjork',
        occupation: 'singer',
        catchPhrase: 'enjoy'
    },
    {
        name: 'Charlie Chaplin',
        occupation: 'actor',
        catchPhrase: 'ufffff'
    }
];


Celebrity.create(celebrities)
    .then((celebrityDB) => {
        console.log(`Created ${celebrityDB.length} celebrities`);
        mongoose.connection.close();
    })
    .catch((err) =>
        console.log(`Error from DB: ${err}`)
    );