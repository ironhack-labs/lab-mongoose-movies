const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');
const mongoose = require('mongoose');

const dbName = 'movies'
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
    {
        name: 'La Estevan',
        occupation: 'madre de família',
        catchPhrase: 'Andreíta cómete el pollo!'
    },
    {
        name: 'Bert',
        occupation: 'Vividor',
        catchPhrase: 'No tengo ninguna'
    },
    {
        name: 'Jandro',
        occupation: 'Millionaire',
        catchPhrase: 'Qué linda la vida sabiéndola vivir'
    }
];

Celebrity.create(celebrities)
.then(()=>{
    console.log('celebrities correctly added');
    mongoose.connection.close();
})
.catch(error=>{
    next(error);
})


const Movies = [
    {
        title: 'film 1',
        genre: 'Terror',
        plot: 'bla bla bla'
    },
    {
        title: 'film 2',
        genre: 'Drama',
        plot: 'bla bla bla bla'
    },
    {
        title: 'film 3',
        genre: 'Comic',
        plot: 'bla bla bla bla bla bla'
    }
];

Movie.create(Movies)
.then(()=>{
    console.log('movies correctly created in the database');
})
.catch(error => {
    next(error);
})