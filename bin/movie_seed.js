require("dotenv").config();

const mongoose = require('mongoose');
const Movie = require('../models/Movie');
const movie_data = require('./movie_data');

// const dbURL = process.env.DBURL;
const dbURL = process.env.DBURL;

mongoose.connect(dbURL).then(() =>{

    console.log(`Connected to db ${dbURL}`);

    movie_data.forEach(movie_data => {

      let movie = new Movie({
        title: movie_data.title,
        genre: movie_data.genre,
        plot: movie_data.plot
      })
      .save()
      .then( () => {
        console.log("Movie created")
        mongoose.disconnect();
      })
   })
})
