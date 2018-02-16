const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movies');
const Movie = require("../models/Movie");
// const Celebrity = require("../models/Celebrity");

// const celebrities = [
//     {
//         name:"Maria Felix",
//         occupation:"actress",
//         catchPhrase:"I might be only one more woman to you but you are one man less  left to me."
//     },
//     {
//         name:"Scarlett O´hara",
//         occupation:"fictional character",
//         catchPhrase:"I´ll think about it tomorrow"
//     },
//     {
//         name:"Bunbury",
//         occupation:"singer",
//         catchPhrase:"agárrate fuerte"
//     }
// ];

// Celebrity.create(celebrities, function(err, result){
//     if(err) console.log("error");
//     console.log("lo lograste!", result);
//     mongoose.connection.close();
// });


const movies = [
    {
    title:"The Departed",
    genre:"Suspense-thriller",
    plot:"infiltrados en la mafia"
},
{
    title:"Limitless",
    genre:"Sci-Fi",
    plot:"A young man takes a drug makes him more intelligent."
},
{
    title:"Gone with the Wind",
    genre:"historical drama",
    plot:"Secesion War in USA, a spoiled southern lady is going to have to fight and charm them all."
}
];

Movie.create(movies, function(err, result){
    if(err) console.log("error");
    console.log("lo lograste!", result);
    mongoose.connection.close();
});