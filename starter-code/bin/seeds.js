const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'celebrity-project';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
    {
        name: "Beyonce",
        occupation: "Singer",
        catchPhrase: "I'm Free."
    },
    {
        name: "Ellie Goulding",
        occupation: "Singer",
        catchPhrase: "Hello, sweetie."
    },
    {
        name: "Rihanna",
        occupation: "Singer",
        catchPhrase: "Bitch Better Have My Money"
    }
]

Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities!`)
    mongoose.connection.close();
  });