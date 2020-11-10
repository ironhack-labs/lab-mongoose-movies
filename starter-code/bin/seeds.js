const mongoose = require('mongoose');
const app = require('../app');
const Movie = require("../models/Movies.model")

const DB_NAME = "starter-code";

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const movies = [{
    title: "Lord of the Rings",
    genre: 'Fantasy',
    plot: 'Frodo has to bring the ring back'
}, {
    title: "Harry Potter",
    genre: 'Wizard',
    plot: 'Harry needs to kill Voldemort'
}, {
    title: "Mean Girls",
    genre: 'Comedy',
    plot: 'Regina George needs to be stopped'
}];

Movie.create(movies)
    .then((moviesDB) => {
        console.log(`${moviesDB.length} have been created`);
        mongoose.connection.close()
    })
    .catch((err) =>
        console.log(`Something went wrong with the celeb-creation ${err}`)
    );