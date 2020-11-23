//bin/seeds.js

const mongoose = require('mongoose');
const Movie = require('../models/Movies.model');

const DB_NAME = 'movies-project';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const movies =[
    {
        title: "Die Hard",
        genre: "Action",
        plot: "a lot of weapons and funny quotes",
    },
    {
        title: "Other super film",
        genre: "Action",
        plot: "bummmmmmm",
    },
    {
        title: "And anouther funny film",
        genre: "Comedy",
        plot: "fun, fun, fun",
    }
]


// const celebrity = [
//     {
//         name: "Bruce Willes",
//         occupation: "Actor",
//         catchPhrase: "yippee ki yay",
//         imagePhrase: "https://i.pinimg.com/originals/01/b6/4d/01b64dbce0c28629b00fa7e7bfbe27c9.jpg",
//     },
//     {
//         name: "Danzel Washington",
//         occupation: "Actor",
//         catchPhrase: "Do what you have to do, to do what you want to do.",
//         imagePhrase: "https://secureservercdn.net/160.153.138.177/02d.9b4.myftpupload.com/wp-content/uploads/2018/01/New-POST-PHOTO-EDITS-for-elite-new-2.jpg?time=1598203525",
//     },
//     {
//         name: "Till Lindemann",
//         occupation: "Singer",
//         catchPhrase: "Feuer frei",
//         imagePhrase: "https://i.ytimg.com/vi/ZkW-K5RQdzo/hqdefault.jpg",
//     },
// ];

Movie.create(movies)
    .then(moviesFromDB => {
        console.log(`Created ${moviesFromDB.length} celebrities`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating celebrities from the DB: ${err}`)
    );