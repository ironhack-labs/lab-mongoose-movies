require("../app.js")

var mongoose = require('mongoose')

/*const celebritySchema = require("../models/celebrity.js")

var celibrityFirst=[{name:'Madonna', occupation:'singer', catchPhrase:"love around"},
{name:'Michale Jordan', occupation:'player', catchPhrase:" around"},
{name:'Justin Biber', occupation:'dancer', catchPhrase:"dance around"}]

 celebritySchema.create(celibrityFirst)
 .then((celebrity)=>{
    console.log('hello')
 })*/

 const MovieSchema = require("../models/movie.js")

var movieFirst=[{title:'titanic', genre:'dram', plot:"love around"},
{title:'james bond', genre:'fiction', plot:"love around"},
{title:'toystory', genre:'fiction', plot:"love around"}]

 MovieSchema.create(movieFirst)
 .then((celebrity)=>{
    console.log('hello')
 })




