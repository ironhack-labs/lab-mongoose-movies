// Iteration #1
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/moviegoose");

const Celebrity = require("../models/Celebrity.js")
const celebrityData = [
    {
        name:"Lory Petty",
        occupation:"Actor",
        catchPhrase:"I'm Tank Girl!"
    },
    {
        name:"Cat",
        occupation:"Youtuber",
        catchPhrase:"Hello, NerdBurger here"
    },
    {
        name:"Vesper",
        occupation:"Ranger",
        catchPhrase:"I'm from the future"
    }
    ];

    Celebrity.collection.drop() //para asegurarme que tire todo lo de seeds antes de meter mas cosas

    Celebrity.create(celebrityData,(err,result)=>{
    console.log("result");
    mongoose.connection.close()
})