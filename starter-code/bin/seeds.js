const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity')
const Movie = require('../models/movie')

const dbName = 'starter-code'
mongoose.connect(`mongodb://localhost/${dbName}`);


const celebrities = [
    {
        name: 'Seth Rogen',
        occupation: 'Comedian',
        catchPhrase: 'Ha.Ha.Ha'
    },
    {
        name: 'Elon Musk',
        occupation: 'Entrepeneur',
        catchPhrase: 'Lets do this'
    },
    {
        name:'Steve Carrel',
        occupation: 'Actor',
        catchPhrase: 'Im an actor'
    }
];

const movies = [
    {
        title: 'Superbad',
        genre: 'Comedy',
        plot: 'Two guys, last day of school',
        
    },
    {
        title: 'Remember the titans',
        genre: 'Drama',
        plot: 'A high school football team wins cup'
    },
    {
        title: 'Pineapple Express',
        genre: 'Comedy',
        plot: 'Two stoners get in trouble'
    }
];

Movie.create(movies)
.then(movies=>{
    console.log(`Created ${movies.length} movies`)
    mongoose.connection.close()
})
.catch(err=>{
    console.log(err)
    throw err;
})

Celebrity.create(celebrities)
.then(celebrities=>{
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close()
})
.catch(err=>{
    console.log(err)
    throw err;
})