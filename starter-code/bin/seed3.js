const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const DB_NAME = 'starter-code';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

Celebrity.collection.drop();
Movie.collection.drop();

const movies = [{
        title: "Terminating Beethoven",
        genre: "Action",
        plot: "In 1807 the world is at war for Europe. But one musician must fight for the world's destiny!",
        cast: [{
                name: "Arnold Schwarzenegger",
                occupation: "Actor & politician",
                catchPhrase: "I'll be back"
            },
            {
                name: "Ludwig Van Beethoven",
                occupation: "Music genius",
                catchPhrase: "To play without passion is inexcusable!"
            }
        ]
    },
    {
        title: "Fly like an Eagle",
        genre: "Biopic",
        plot: "Fly with Air Jordan through his life, his successes, his darkest moments and see him from child to legend",
        cast: [{
            name: "Michael Jordan",
            occupation: "Basketball player",
            catchPhrase: "Some people want it to happen, some wish it would happen, others make it happen"
        }]
    },
    {
        title: "Hulk in time",
        genre: "Peplum",
        plot: "Hulk has been sent across oceans of time, lost, could his salvations lie in Marcus Aurelius teachings?",
        cast: [{
            name: "Bruce Banner/Hulk",
            occupation: "Superhero",
            catchPhrase: "Hulk smash!"
        }, {
            name: "Marcus Aurelius",
            occupation: "Roman Emperor",
            catchPhrase: "You have power over your mind - not outside events. Realize this, and you will find strength"
        }]
    }
];

const createCelebrities = movies.map(movie => {
    Celebrity.create(movie.cast, err => {
        if (err) {
            throw err;
        }
        console.log(`Created ${movie.cast.length} celebrities`);
        mongoose.connection.close();
    });
});


Movie.create(movies, err => {
    if (err) {
        throw err;
      }
      console.log(`Created ${movies.length} movies`);
      mongoose.connection.close();
});