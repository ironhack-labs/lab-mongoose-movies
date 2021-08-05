const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');

mongoose
  .connect(`mongodb://localhost/starter-code`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((x) => {
    console.log("Connected to Mongo");
    })
    .catch((err) => {
      console.log("Error with Mongo")
});

const celebrities = [
    {
        name: 'Donatella Versace',
        occupation: 'Designer',
        catchPhrase: 'My style is not that big. I wear heels, tight pants, and I wear diamonds.'
    },
    {
        name: 'Brad Pit',
        occupation: 'Actor',
        catchPhrase: "I've never even met Jennifer Aniston."
    },
    {
        name: 'Salvador Dalí',
        occupation: 'Artist',
        catchPhrase: "I don't do drugs, I am drugs."
    }
];


Celebrity.create(celebrities)
  .then((celebritiesFromDB) => {
    console.log(`Created ${celebritiesFromDB.length} celebrities`);
    mongoose.connection.close();
  })
  .catch((err) => 
    console.log(`Error while creating database: ${err}`)
);