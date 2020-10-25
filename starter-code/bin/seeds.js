const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');
const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`, {useNewUrlParser:true, useUnifiedTopology:true});

const celebrities = [
    {name:'Xavi', occupation:'programer', catchPhrase:'sdsdsd'},
    {name: 'name', occupation:'occu', catchPhrase:'catch'},
    {name: 'Jonh', occupation: 'waiter', catchPhrase:'no'}
];

// Celebrity.create(celebrities, (err)=>{
//     if(err){throw(err);}
//     console.log(`Created ${celebrities.length} celebrities`);
//     mongoose.connection.close();
// })

const movies = [
    {title:'the Movie', genre:'Musical', plot:'something, something'},
    {title:'the Movie2', genre:'Musical2', plot:'something, something2'},
    {title:'the Movie3', genre:'Musical3', plot:'something, something3'},
];

Movie.create(movies, (err)=>{
    if(err){throw(err);}
    console.log(`Created ${movies.length} movies`);
    mongoose.connection.close();
});