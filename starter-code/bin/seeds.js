// bin/seeds.js

const mongoose = require('mongoose');
const Movies = require('../models/Movies.model');

const DB_NAME = 'starter-code2';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const celebrity = [{
        title: 'Salvenme!',
        genre: 'Terror',
        plot: 'ya no quiero mas lab',

    },
    {
        title: 'la risa!',
        genre: 'de risa',
        plot: 'para reir',

    },
    {
        title: 'la accion!',
        genre: 'de accion',
        plot: 'para dormir',

    },
];

Movies.create(celebrity)
    .then(booksFromDB => {
        console.log(`Created ${booksFromDB.length} celebrity`);

        // Once created, close the DB connection
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));
