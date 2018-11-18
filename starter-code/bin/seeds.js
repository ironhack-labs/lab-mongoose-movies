const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');



const celebrities = [

    {
        name: 'Gabriel Macht',
        occupation: 'actor',
        catchPhrase: 'You always have a choice'
        
    },

    {
        name: 'Michael Jordan',
        occupation: 'baskteball player',
        catchPhrase: 'You must expect great things of yourself before you can do them'
    },

    {
        name: 'Dave Grohl',
        occupation: 'Singer',
        catchPhrase: 'I don´t belive in guilty pleasures'
    }
];


const movies = [
    {
        name: 'seven',
        genre: 'Crime',
        plot: 'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.'
    },

    {
        name: 'Lords Of Dogtown',
        genre: 'Biography',
        plot: 'The film follows the surf and skateboarding trends that originated in Venice, California during the 1970s.'
    },

    {
        name: 'Point Break',
        genre: 'Action',
        plot: 'An F.B.I. Agent goes undercover to catch a gang of surfers who may be bank robbers.'
    }
]

const dbName = 'celebrities-project';
mongoose.connect(`mongodb://localhost/${dbName}`)
.then(()=>{

    Movie.create(movies,(err)=>{
        if(err){throw(err)}
        console.log(`Created ${movies.length} movies`);
        mongoose.connection.close();
    })

   
})
.catch(err =>{
    console.error('Error connecting to mongo', err);
})

mongoose.connect(`mongodb://localhost/${dbName}`)
.then(()=>{

    Celebrity.create(celebrities, (err)=>{
        if(err){throw(err)}
        console.log(`Created ${celebrities.length} celebrities`);
        mongoose.connection.close();
    })
    
})
.catch(err =>{
    console.error('Error connecting to mongo', err);
})

