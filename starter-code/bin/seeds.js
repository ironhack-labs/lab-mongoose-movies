// bin/seeds.js


const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

mongoose.connect(`mongodb://localhost/celebrities-code`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebrities = [{
        name: 'Chuck Norris',
        occupation: 'Martial Artist',
        catchPhrase: "When the boogie man goes to sleep he checks his closet for me"
    },
    {
        name: 'The Rock',
        occupation: 'Wrestler',
        catchPhrase: 'Do you smell what the rock is cooking?!'
    },
    {
        name: 'Ricky Gervais',
        occupation: 'Comedian',
        catchPhrase: "Mondays are fine. It's your life that sucks."
    },

];

Celebrity.create(celebrities).then(() => {
    console.log(`Created ${celebrities.length} celebrities`);
    mongoose.connection.close();
});