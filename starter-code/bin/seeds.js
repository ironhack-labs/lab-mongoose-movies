const mongoose = require('mongoose');
const Movie = require('../models/movie');
const DB_NAME = 'starter-code';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const movies = [{
        title: 'Test 1',
        genre: 'drama',
        plot: 'lorem ipsum'
    },
    {
        title: 'Test 2',
        genre: 'comedy',
        plot: 'lorem ipsum'
    },
    {
        title: 'Test 3',
        genre: 'crime',
        plot: 'lorem ipsum'
    }
];
Movie.create(movies, err => {
    if (err) {
        throw err;
    }
    console.log(`Created ${movies.length} movies`);
    mongoose.connection.close();
});