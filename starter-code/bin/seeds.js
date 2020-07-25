const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = "lab-mongoose-movies";
const mongoUrl = `mongodb://localhost/${dbName}`;
const mongoConfig = {
    useNewUrlParser: true
};

mongoose.connect(mongoUrl, mongoConfig);

const celebritiesList = [{
        name: "Veneno",
        occupation: "Prostitute",
        catchPhrase: "Chupa y mama que se derrama"
    },
    {
        name: "La Piojo",
        occupation: "Influencer",
        catchPhrase: "Y tu quién ereh"
    },
    {
        name: "Yaoming",
        occupation: "Meme",
        catchPhrase: "Yaoming face"
    }
];

Celebrity.create(celebritiesList)
    .then(celebrities => console.log(`${celebrities.length} celebrities have been created`))
    .catch((err) => console.log(`Error ocurred while creating the celebs in MongoDB: ${err}`));

//node bin/seeds.js para añadirlo a la DB