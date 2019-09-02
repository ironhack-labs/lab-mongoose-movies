const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");

mongoose.connect('mongodb://localhost/starter-code');
// ,{useNewUrlParser: true}.then(() => {
//     console.log('Connected to Mongo!');
//   }).catch(err => {
//     console.error('Error connecting to mongo', err);
//   });


// const celebrities=[
//     {
//     name:"Bruce Willis",
//     occupation:"actor",
//     catchPhrase: "yipeekay motherf***er!"
//     },
//     {
//     name: "Taylor Swift",
//     occupation: "singer, sognwriter",
//     catchPhrase:"Shake it off!"
//     },
//     {
//     name: "Lebron James",
//     occupation: "basketball player",
//     catchPhrase:"Tacoooooo Tuesdayyyyy"
//     },

// ];

// Celebrity.insertMany(celebrities).then(dbRes =>{
//         console.log(dbRes,"addded to the database!");
//     }).catch(dbErr =>{
//         console.log(dbErr);
//     });

const movies =[
    {
        title:"Die Hard",
        genre : "action",
        plot: "a christmas movie for the family, featuring Bruce Willis as the guy you want to have in the building during an hostage situation."
    },
    {
        title:"Titanic",
        genre : "drama",
        plot: "THERE WAS ENOUG ROOM FOR TWO, ROSE."
    },
    {
        title:"Bridge to Terabitha",
        genre : "drama - sci-fi ",
        plot: "The kid was dead the whole time"
    },
];

Movie.insertMany(movies).then(dbRes =>{
            console.log(dbRes,"addded to the database!");
        }).catch(dbErr =>{
            console.log(dbErr);
        });