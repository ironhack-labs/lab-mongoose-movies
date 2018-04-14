require("dotenv").config();

const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const celebrities_data = require('./celebrities_data');
const Movie = require('../models/Movie');
const movies_data = require('./movies_data');

const dbURL = process.env.DBURL;
mongoose.connect(dbURL).then(() =>{
    console.log(`Connected to db ${dbURL}`);
    Celebrity.collection.drop();
    Movie.collection.drop();

    Celebrity.create(celebrities_data)
    .then((celebrity) => {
        console.log(celebrity)
    })
    .catch((err) => {
        console.log(err)
    })

    Movie.create(movies_data)
    .then((movie) => {
        console.log(movie)
    })
    .catch((err) => {
        console.log(err)
    })

    //mongoose.disconnect();
})