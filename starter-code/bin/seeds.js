//call mongoose
const mongoose = require('mongoose')
//call Celebrity was declared in celebrity.js
const Celebrity = require("../models/celebrity.js")
//call Movies schema
const Movie = require("../models/movie.js")
// create a data base in mongoDB shell
//use movies
//insert one data in database (mongoDB shell)
//db.movies.insert({"title":"Raw"})
//connect mongoose with db celebrities 

mongoose.connect('mongodb://localhost/celebrities', {useNewUrlParser: true}, function(err){
    if(err) console.log("ERROR",err)
    else console.log("connected")
})
mongoose.connect('mongodb://localhost/movies', {useNewUrlParser: true}, function(err){
    if(err) console.log("ERROR",err)
    else console.log("connected")
})

//dont't forget to charge data into database, in a terminal just type: node seeds.js (bin folder)

// Create an array of 3 objects, each with name, occupation and catchPhrase 
// let celebritiesArray = [{
//     name:           "Mariya Takeuchi",
//     occupation:     "Singer",
//     catchPhrase:    "Plastic love",
//     },
//     {
//     name:           "Tom Yorke",
//     occupation:     "Musician",
//     catchPhrase:    "I'm creep",
//     },
//     {
//     name:          "Arnold Schwarzenegger",
//     occupation:     "Muscle man",
//     catchPhrase:    "I'll back"
//     },
//     {   
//     name:          "Shinji Ikari",
//     occupation:     "Cry teenager",
    
//     catchPhrase:    "Daaaaaaad"
//     }
// ]

//create movies array

let moviesArray = [{
    title:              "The silence of the lambs",
    genre:              "Thriller",
    plot:               "clariceeeee",
    },
    {
    title:              "A serbian film ",
    genre:              "Terror",
    plot:               "He offers me a simple job",
    },
    {
    title:              "Cannibal Holocaus",
    genre:              "Terror",
    plot:               "ewwwww",
    },
    {   
    title:              "Martyrs",
    genre:              "Gore",
    plot:               "My skin hurts",
    }
]

//Call the Celebrity model's create method with the array as argument.
Celebrity.create (celebritiesArray,() =>{
    console.log("created data base") //display message
})

//all movies model
Movie.create (moviesArray, () =>{
    console.log("movies data base created ")
})
