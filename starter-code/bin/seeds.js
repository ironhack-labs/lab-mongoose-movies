const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/starter-code`, { useNewUrlParser: true, useUnifiedTopology: true } );

const celebrity = [
    {
        name: "Sergio Ramos",
        occupation: "Futbolista",
        catchPhrase: "Unos juegan a basquet y otros a baloncesto",

    },
    {
        name: "Jhony Deep",
        occupation: "Actor",
        catchPhrase: "",

    },
    {
        name: "vegetta",
        occupation: "Gerreo",
        catchPhrase: "Puedes controlar mi cuerpo y mi mente pero hay algo que un Saiyajin siempre tendrá, ¡su orgullo!",

    }
]

Celebrity.create(celebrity, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrity.length} celebrity`)
    mongoose.connection.close();
  });