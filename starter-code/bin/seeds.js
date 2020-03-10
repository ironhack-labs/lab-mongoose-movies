const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

mongoose.connect('mongodb://localhost/starter-code',{useNewUrlParser:true});

const celebrities = [
    {
        name:"Tom Cruise",
        occupation:"actor",
        catchPhrase:"Show me the money!"
    },

    {
        name:"Beyonce",
        occupation:"singer",
        catchPhrase:"confidence"
    },

    {
        name:"Daffy Duck",
        occupation:"cartoon",
        catchPhrase:"Youu are deththpicable!"
    }
];

Celebrity.create(celebrities, err => {
    if (err) {
        throw err;
    }
    console.log(`Created ${celebrities.length} celebrities`);
    mongoose.connection.close();
});

// const mongoose = require('mongoose');
// const Movie = require('../models/movie');

// mongoose.connect('mongodb://localhost/starter-code',{useNewUrlParser:true});

// const movies = [
//     {
//         title:"",
//         genre:"",
//         plot:"",
//         cast:""
//     },

//     {
//         title:"",
//         genre:"",
//         plot:"",
//         cast:""
//     },

//     {
//         title:"",
//         genre:"",
//         plot:"",
//         cast:""
//     }
// ];

// Movie.create(movies, err => {
//     if (err) {
//         throw err;
//     }
//     console.log(`Created ${movies.length} movies`);
//     mongoose.connection.close();
// });