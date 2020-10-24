const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

mongoose.connect(`mongodb://localhost/starter-code`, { useNewUrlParser: true, useUnifiedTopology: true } );

const celebrities = [
    {
        name: "Brad pitt",
        occupation: "Actor",
        catchPhrase: "American actor and producer"
    },
    {
        name: "Tom Cruise",
        occupation: "Actor",
        catchPhrase: "American actor and producer"
    },
    {
        name: "Matthew McConaughey",
        occupation: "Actor",
        catchPhrase: "American actor and producer"
    }
]


Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close();
  });