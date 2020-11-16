const mongoose = require('mongoose');
// const   Celebrity = require('../models/celebrity');
const   Movies = require('../models/movie');

const dbName = 'practicemovies';
mongoose.connect(`mongodb://localhost/${dbName}`);
// const celebrities=[
//     {
//     name: "Keanu Reeves",
//     ocupation: ["Actor"],
//     catchPhrase: "If you have been brutally broken but still have the courage to be gentle to other living beings, then you’re a badass with a heart of an angel.",
//     },

//     {
//     name: "Phoebe Waller Bridge",
//     ocupation: ["Actress", "Writer", "Producer"],
//     catchPhrase: "I'll never get bored of seeing flawed women on the screen"
// },
// {
//     name: "Victoria Pedretti",
//     ocupation:["Actress"],
//     catchPhrase: "I'm a lot braver than people think. Including me."

//     }

// ]
// Celebrity
//     .create(celebrities)
//     .then(allcelebritieCreated => {
//         console.log(`Created ${allcelebritieCreated.length} celebrities`)
//         mongoose.connection.close();
//     })
//     .catch(err => console.log('Hubo un error,', err))
const movies = [
    {
        title: "John Wick",
        genre: "Action",
            
        plot:"Keanu Reeves"
    },
       {
        title: "Fleabag",
        genre: "Comedy",  
        plot:"Phoebe Waller Bridge"
    },
         {
        title: "Bly Manor",
        genre: "Terror",  
        plot:"Victoria Pedretti"
    }

]
Movies
    .create(movies)
    .then(movies => {
        console.log(`Created ${movies.length} movies`)
        mongoose.connection.close();
    })
    .catch(err => console.log('Hubo un error,', err))