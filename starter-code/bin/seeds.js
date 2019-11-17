require("dotenv").config();

const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie")

const myCelebrities = [
    {
        name: 'Juju Smith Schuster',
        occupation: 'NFL Wide Reciever',
        catchPhrase: "Let's go!!"
    },
    {
        name: 'Marques Brownlee',
        occupation: 'Youtuber',
        catchPhrase: 'Thank you guys catch you on the next one.'
    },
    {
        name: 'Casey Neistat',
        occupation: 'Youtuber',
        catchPhrase:'Do what you love'
    }
];


const myMovies = [
    {
        title: 'Joker',
        genre: 'Thriller',
        plot: 'The life of the super villan batman'
    },
    {
        title: 'Acuaman',
        genre: 'Action',
        plot: 'The worst superhero movie ever'
    },
    {
        title: 'The shinning',
        genre: 'Mystery',
        plot: 'A hounted hotel'
    }
];

mongoose
.connect('mongodb://localhost/celebrities', {useNewUrlParser: true})
.then(async () => {
    const moviesArr = await Movie.create(myMovies);
    console.log(`${moviesArr.length} created successfully`);
    mongoose.connection.close();
})
.catch(err => console.log(err));


