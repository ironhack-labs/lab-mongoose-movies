const mongoose = require('mongoose');
const Celebs = require('../models/celeb-models.js');

mongoose.connect('mongodb://localhost/lab-mongoose-movies');

const celebrities = [{
        name: "Mike",
        occupation: "Dancer",
        catchPhrase: "Dance till you dont feel your feet"

    },
    {
        name: "Jake",
        occupation: "Comedian",
        catchPhrase: "Laughter is the solution to all War"

    },
    {
        name: "Jorge",
        occupation: "Actor",
        catchPhrase: "Together from the ashes we will raise"

    }
];
Celebs.create(celebrities, (err, theCeleb) => {
    if (err) {
        throw (err);
    }
    theCeleb.forEach((oneCeleb) => {
        console.log(oneCeleb.name);
    });
});
