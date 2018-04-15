require("dotenv").config();

const mongoose = require('mongoose');
const Movie = require('../models/Movie');
const movies_data = require('./movies_data');

const dbURL = process.env.DBURL;

mongoose.connect(dbURL)
.then(() =>{
    console.log(`Connected to db ${dbURL}`);
    Movie.collection.drop();

    Movie.create(movies_data)
    .then(function (movies) {
        console.log(movies)
    })
})
.catch((err) => {
    console.log(err)
});