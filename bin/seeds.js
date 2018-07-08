// const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity');

// const dbName = 'lab-mongoose-movies';
// mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//     {
//         name: "Michael Scott",
//         occupation: 'Regional Manager of Dunder Mifflin',
//         catchPhrase: 'Thats what she said'
//     },
//     {
//         name: "Cardi B",
//         occupation: "rapper",
//         catchPhrase: "Okurrrrr"
//     },
//     {
//         name: "Dwight Schrute",
//         occupation: "Assistant to the Regional Manager",
//         catchPhrase: "Beets, Bears, Battlestar galactica"
//     }

// ];

// Celebrity.create(celebrities)
// .then((result)=>{
//     console.log(`created ${result.length} celebrities`)
//     // mongoose.disconnect();
// }).catch((err)=>{
//     console.log(err)
// });

const mongoose = require('mongoose');
const Movie = require('../models/movie');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
    {
        title: "Finding Nemo",
        genre: "Kids and Family",
        plot: "A fish named Nemo gets lost and has to find his way back home"
    },
    {
        title: "Insidious",
        genre: "Horror",
        plot: "A couple's son experiences paranormal activity and gets stuck in a dream world/coma"
    },
    {
        title: "The Little Mermaid",
        genre: "Kids and Family",
        plot: "A mermaid gets her wish granted to become human"
    }

];

Movie.create(movies)
.then((result)=>{
    console.log(`created ${result.length} movies`)
    // mongoose.disconnect();
}).catch((err)=>{
    console.log(err)
});