const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

//const dbName = 'celebrities-project';
mongoose.connect(`mongodb://localhost/starter-code`, { useNewUrlParser: true, useUnifiedTopology: true } );


let celebrities = [
    {
    name: "Britney Spears",
    occupation: "Singer",
    catchPhrase: "It's Britney, bitch"
    },
    {
    name: "Drake",
    occupation: "Singer",
    catchPhrase: "You only live once...YOLO"
    },
    {
    name: "Heidi Klum",
    occupation: "Model",
    catchPhrase: "Auf Wiedersehen!"
    }
];

Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) ;}
    console.log(`Created ${celebrities.length} celebrities`);
    mongoose.connection.close();
  });