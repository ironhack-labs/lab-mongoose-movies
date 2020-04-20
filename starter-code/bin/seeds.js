// EXO 1 CELEBRITIES

// require('dotenv').config();
// const mongoose = require("mongoose");
// const Celebrity = require('../models/celebrity');

// const celebrities = [
//     {
//         name: "Tom Cruise",
//         occupation: "actor",
//         catchPhrase: "I love hotdogs"
//     },
//     {
//         name: "Beyonce",
//         occupation: "singer",
//         catchPhrase: "I love money"
//     },
//     {
//         name: "Daffy Duck",
//         occupation: "movie character",
//         catchPhrase: "Youuu're deththpicable!"
//     },
// ];

// mongoose
//     .connect(process.env.MONGODB_URI)
//     .then((self) => {
//         console.log(`Connected to ${self.connection.name}`);

//         // Seeds
//         Celebrity.create(celebrities)
//             .then((celebrities) => {
//                 celebrities.forEach((element) => {
//                     console.log(element.name);
//                 });
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     })
//     .catch((err) => {
//         console.log(`Error occured while connecting to the Database ${err}`);
//     });



// EXO 2 MOVIES

const mongoose = require('mongoose');
require('dotenv').config();
const Movie2 = require('../models/movie2');

const movies2 = [
    {
        name: 'My First Movie',
        genre: 'Comedy',
        plot: 'hahaha'
    },
    {
        name: 'My Second Movie',
        genre: 'Action',
        plot: 'hohoho'
    }
];

mongoose.connect(process.env.MONGODB_URI)
    .then((self) => {
    console.log(`Connected to ${self.connection.name}`);
    Movie2.create(movies2)
        .then((movies2) => {
            movies2.forEach((element) => {
                console.log(element.name)
            });
        }).catch((err) => {
            console.log(err);
        });
}).catch((err) => {
    console.log(err);
});