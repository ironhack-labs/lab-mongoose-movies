const mongoose = require('mongoose');
const Celeb = require('../models/celeb');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebs = [
    {
        name: 'Matías Prats',
        occupation: 'News Anchor',
        catchphrase: 'Así son las cosas, y así se las hemos contado'
    },
    {
        name: 'Neil Patrick Harris',
        occupation: 'Actor',
        catchphrase: `It's gonna be legen — wait for it — dary.`
    },
    {
        name: 'Homer Simpson',
        occupation: 'Technician',
        catchphrase: `D'Oh`
    },
    {
        name: 'Walter Cronkite',
        occupation: 'News Anchor',
        catchphrase: `And that's the way it is`
    }
];

Celeb.create(celebs, (err) => {
    if (err) {throw(err)};
    console.log(`created ${celebs.length} celebrities`);
    mongoose.connection.close();
});