const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/lab-mongoose-movies');

const Celebrity = require('../models/celebrity-model.js');

const celebrities = [
    {
        name: 'Kevin Bacon',
        occupation: 'Actor',
        catchPhrase: 'If you take me out of it, I find \'six degrees\' to be a beautiful concept that we should try to live by. It\'s about compassion and responsibility for everyone on the planet.',
    },
    {
        name: 'Kevin Spacey',
        occupation: 'Actor',
        catchPhrase: 'Life\'s all about perceptions.'
    },
    {
        name: 'Drake',
        occupation: 'Musician',
        catchPhrase: 'YOLO',
    }
];


Celebrity.create( celebrities, (err, celebritiesDocs) => {
    if(err) {
        throw err;
    }

    celebritiesDocs.forEach((oneCelebrity) => {
            console.log(`NEW CELEBRITY ${oneCelebrity.name} -> ${oneCelebrity._id}`);
    });
});
