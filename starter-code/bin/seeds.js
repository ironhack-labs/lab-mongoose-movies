const mongoose = require('mongoose');

//I'm commenting out the movie stuff
//because I made my movie database before 
//I made my celebrity database.


// const Movie = require('../models/movie-model');


const Celebrity =require('../models/celebrity-model')
//don't forget to connect... the /movies is the database name


// const dbName = 'movies'
// mongoose.connect(`mongodb://localhost/${dbName}`);
//could have just had localhost/movies instead

dbName2='celebsDB'
mongoose.connect('mongodb://localhost/celebsDB')
const celebsArray = [
    {
        name: 'Iggy Pop',
    occupation: 'Rock Star',
    catchPhrase: 'Got a lust for life'
    },
    {
        name: 'George R.R. Martin',
    occupation: 'Author',
    catchPhrase: 'Winter is coming'
    },
    {    
       name: 'Shonda Rhimes',
    occupation: 'Screenwriter',
    catchPhrase: 'Seriously?'
    },
]

Celebrity.create(celebsArray)
.then(celebrities => {
    celebrities.forEach(oneCeleb=>{
        console.log('In DB ', oneCeleb.name);
    });
    mongoose.disconnect();
})
.catch( err => console.log('Error while creating celeb seeds:', err));

// const moviesArray = [
//     {
//         title: 'movie1', 
//         genre: 'genre1',
//         plot: 'plot1'
//     },
//     {
//         title: 'movie2', 
//         genre: 'genre2',
//         plot: 'plot2'
//     },
//     {
//         title: 'movie3', 
//         genre: 'genre3',
//         plot: 'plot3'
//     },
// ];

// Movie.create(moviesArray)
// .then(movies => {
//     movies.forEach(oneMovie=> {
//         console.log('In DB: ', oneMovie.title);
//         });
//         mongoose.disconnect();
// })
// .catch( err => console.log('Error while creating seeds:', err));