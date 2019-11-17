const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`)

const celebrities =[
    {
        name: "Peppa Pig",
        ocupation: "Bartender",
        catchFrase: "YOLO"
    },

    {
        name: "Tony Ceremony",
        ocupation: "Priest",
        catchFrase: "I would have gotten the promotion, but my attendance wasn’t good enough."
    },

    {
        name: "Donatello",
        ocupation: "TMNT",
        catchFrase: "I'm the brains of this operation."

    },
]

Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close();
  });