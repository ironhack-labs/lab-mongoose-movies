const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/celebrities");

const Celebrity = require("../models/Celebrity.js");
const Movie = require("../models/Movie.js")

const celebrities = [
    {
        name: "Leonardo DiCaprio",
        occupation: "Actor",
        catchPhrase: "I'll inception your dreams",
    },
    {
        name: "Bradley Cooper",
        occupation: "Actor",
        catchPhrase: "I'm limitless",
    },
    {
        name: "Anne Hathaway",
        occupation: "Actress",
        catchPhrase: "The devil wears Prada",
    },
]

const movies = [
    {
        title: "Inception",
        genre: "Sci fi",
        plot: "Amazing",
    },
    {
        title: "The Lion King",
        genre: "Drama",
        plot: "Lions",
    },
    {
        title: "The Godfather",
        genre: "Drama",
        plot: "Italian Mafia",
    },
]

Celebrity.create(celebrities, (err,result) => {
    if (err) {
        console.log("Error")
    } else {
    result.forEach((celeb) => console.log(`The celebrity ${celeb} has been created successfully`));
    }
});

Movie.create(movies, (err,result) => {
    if (err) {
        console.log("Error")
    } else {
    result.forEach((mov) => console.log(`The celebrity ${mov} has been created successfully`));
    }
});