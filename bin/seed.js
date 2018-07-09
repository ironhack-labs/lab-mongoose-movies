const mongoose = require('mongoose');
const Movie = require('../models/movie'); //import model to have blueprint

// dont forget to connect with your DB 

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
    {
        title: "Coming To America",
        genre: "Comedy",
        plot: "An extremely pampered African Prince travels to Queens, New York, and goes undercover to find a wife"
    },
    {
        title: "Friday",
        genre: "Comedy",
        plot: "Two homies, Smokey and Craig, smoke a dope dealer's weed and try to figure a way to get the $200 they owe to the dealer."
    },
    {
        title: "Matrix",
        genre: "Action, Sci-Fi",
        plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
    }
]

Movie.create(movies)
.then((result)=>{
    console.log(`created ${result.length} movies`)
})
// mongoose.disconnect();
.catch((err)=>{
    console.log(err)
});

// const celebrities = [
//     {
//         name: 'Mike Tyson',
//         occupation: 'Boxer',
//         catchPhrase: 'Im the biggest fighter in the history of the sport!'
//     },
//     {
//         name: 'Floyd Mayweather',
//         occupation: 'Boxer',
//         catchPhrase: 'Money Team!'
//     },
//     {
//         name: 'Muhammad Ali',
//         occupation: 'Boxer',
//         catchPhrase: 'Float like a butterfly, sting like a bee'
//     }
// ]

// Celebrity.create(celebrities)
// .then((result)=>{
//     console.log(`created ${result.length} celebrities`)
// })
// .catch((err)=>{
//     console.log(err)
// });