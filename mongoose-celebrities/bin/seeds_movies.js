require("dotenv").config();

const mongoose = require('mongoose');
const Movie = require('../models/movie');
const data = require('./dataMovie');

const dbURL = process.env.DBURL;

mongoose.connect(dbURL)
.then(() =>{
    console.log(`Connected to db ${dbURL}`);
    Movie.collection.drop();

    Movie.create(data)
    .then(function (movie) {
        console.log(movie)
    })    
})
.catch((err) => {
    console.log(err)
})