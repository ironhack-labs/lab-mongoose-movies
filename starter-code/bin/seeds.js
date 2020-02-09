const mongoose = require('mongoose');
const faker = require('faker');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');


function dbConnect(cb) {
    mongoose
    .connect('mongodb://localhost/mongoose-movies', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
        cb();
    })
    .catch(err => {
        console.error('Error connecting to mongo', err);
    });
}


dbConnect(() => {
    Celebrity.deleteMany()
    .then(() => {
        let celebs = generateCelebs();
        return Celebrity.insertMany(celebs)
    })
    .then(() => {
        return Movie.deleteMany()
    })
    .then(() => {
        let movies = generateMovies();
        return Movie.insertMany(movies)
    })
    .then(() => {
        console.log("succesfully added all the data");
        mongoose.connection.close();
        process.exit(0);
    })
});


function generateCelebs() {
    return celebs = new Array(3).fill().map(() => {
        return celeb = {
            name: faker.name.findName(),
            occupation: faker.name.jobType(),
            catchPhrase: faker.company.catchPhrase()
        }
    });
}

function generateMovies() {
    let genres = ['Thriller', 'Drama', 'Comedy', 'Horror', 'Action', 'Adventure', 'Sci-Fi'];
    return movies = new Array(3).fill().map(() => {
        return movie = {
            title: faker.random.words(2),
            genre: genres[Math.floor(Math.random() * genres.length)],
            plot: faker.lorem.paragraph(3)
        }
    });
}