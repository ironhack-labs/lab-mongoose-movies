const mongoose = require('mongoose');
const Celeb = require("../models/celebrity.js");
const Movie = require("../models/movie.js");

mongoose.connect('mongodb://localhost/viernesSemana4')
.then(()=> {
    Celeb.insertMany(celebs).then().catch()
    Movie.insertMany(movies).then().catch()
})
.catch(err => {console.log(err)})


const celebs = [
    {name: "aaaa",occupation: "aaaa",catchPhrase: "aaaa"},
    {name: "bbbb",occupation: "bbbb",catchPhrase: "bbbb"},
    {name: "cccc",occupation: "cccc",catchPhrase: "cccc"}
]

const movies = [
    {title:"1111",genre:"1111",plot:"1111"},
    {title:"2222",genre:"2222",plot:"2222"},
    {title:"3333",genre:"3333",plot:"3333"}
]