const mongoose = require('mongoose');
const celebrity = require('../models/celebrity');

mongoose.connect(`mongodb://localhost/ActoresLabExpress`, { useNewUrlParser: true, useUnifiedTopology: true });

const Celebrityes = [
    {
    name: "Arnold Schwarzenegger",
    occupation: "Singer",
    catchPhrase: "Nothing to say here",
    },
    {
    name: "The Rock",
    occupation: "Actor",
    catchPhrase: "I'm the strongest man in the world",
    },
    {
    name: "Dua Lipa",
    occupation: "Singer",
    catchPhrase: "Nothing to say here tooo tooo",
    },
    {
    name: "50 Cent",
    occupation: "Rapper",
    catchPhrase: "Get Rich or Die Tryin'",
    },
    {
    name: "Rosalía",
    occupation: "Flamenca?",
    catchPhrase: "Malamente",
    },
    {
    name: "Shakira",
    occupation: "Singer",
    catchPhrase: "Waka Waka",
    }
];

celebrity.create(Celebrityes, (err) => {
    if (err) { throw(err) } 
    console.log(`Created ${Celebrityes.length} Celebrityes`) 
    mongoose.connection.close(); 
  });


