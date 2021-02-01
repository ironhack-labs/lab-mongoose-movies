// const celebrities = [
//     {
//         name: "Leonardo DiCaprio",
//         ocupation: "Actor",
//         catchPhrase: "My true love was Rose"
//     },
//     {
//         name: "Leo Messio",
//         ocupation: "Athlete",
//         catchPhrase: "I'm the GOAT"
//     },
//     {
//         name: "Lebron James",
//         ocupation: "Athlete",
//         catchPhrase: "Call me King James. And I'm the GOAT too, by the way."
//     }
// ]

require("dotenv").config();
require('../app');
const faker = require('faker');
const mongoose = require('mongoose');

// Create Celebrities
// const Celebrity = require('../models/Celebrity.model')

// Celebrity.deleteMany()
//     .then(() => {
//         for (let i = 0; i < 20; i++) {
//             Celebrity.create({
//                     name: faker.name.firstName(),
//                     lastName: getRandom(["", faker.name.lastName()]),
//                     ocupation: getRandom(["artist", "athlete", "actor", "politician", "public figure", "unknown"]),
//                     catchPhrase: faker.lorem.sentence()
//                 })
//                 .then(createdCeleb => console.log(`Created celebrity: ${createdCeleb.name}${createdCeleb.lastName}`))
//                 .catch(error => console.log(`Error while creating a new celebrity: ${error}`))
//                 .finally(() => mongoose.connection.close())
//         }
//     });

// Create Movies
// const Movie = require('../models/Movie.model');

// Movie.deleteMany()
//     .then(() => {
//         for (let i = 0; i < 10; i++) {
//             Movie.create({
//                     title: faker.lorem.words(),
//                     genre: faker.lorem.word(),
//                     plot: faker.lorem.paragraphs(2)
//                 })
//                 .then(createdMovie => console.log(`Created movie: ${createdMovie.title}`))
//                 .catch(error => console.log(`Error while creating a new movie: ${error}`))
//                 .finally(() => mongoose.connection.close())
//         }
//     });

// Get Random function
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}