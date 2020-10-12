//make sure db is connected while seeding
require('../config/db.config')

//get my model
let  MovieModel = require('../models/movie-model')
let mongoose = require('mongoose')

MovieModel.insertMany([
    {title: "Judge Dredd", genre: "DC Movie", plot: "Dystopia"}, 
    {title: "The beauty and the Beast", genre: "Disney Movie", plot: "Romantic"}, 
    {title: "Casper", genre: "Ghost", plot: "Funny ghost"}
])
    .then(() => {
        console.log('The data was added.')
        mongoose.connection.close()
    })
    .catch((err) => {
        console.log('Something went wrong', err)
    })