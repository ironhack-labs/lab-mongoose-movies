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
//const mongoose = require('mongoose')
// const Celebrity = require('../models/Celebrity.model')
const Movie = require('../models/Movie.model');
const faker = require('faker');
const Celebrity = require("../../models/Celebrity.model");

Celebrity.deleteMany()
    .then(() => {
        for (let i = 0; i < 10; i++) {
            Movie.create({
                    title: faker.lorem.words(),
                    genre: faker.lorem.word(),
                    plot: faker.lorem.paragraphs(2)
                })
                .then(createdMovie => console.log(`Created movie: ${createdMovie.title}`))
                .catch(error => console.log(`Error while creating a new movie: ${error}`))
                .finally(() => mongoose.connection.close())
        }
    });