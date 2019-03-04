require("dotenv").config()
const mongoose = require("mongoose")
const Celebrity = require("../models/Celebrity")
const Movie = require("../models/Movie")

mongoose
    .connect(process.env.DB, {useNewUrlParser: true})
    .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
    console.error('Error connecting to mongo', err)
    })
    
    .then(() => {
        // return Celebrity.create([
        //     {
        //         name:"Donald Trump",
        //         occupation: "Leader of the Free World",
        //         catchPhrase: "Look at my hair, it's awesome!!!"
        //     },
        //     {
        //         name: "Batman",
        //         occupation: "Full-time superhero",
        //         catchPhrase: "I'm better than Superman"
        //     },
        //     {
        //         name: "Robin",
        //         occupation: "Batman's boyfriend",
        //         catchPhrase: "I'm worse than Batman"
        //     }
        // ])
        return Movie.create([
            {
                title:"Iron Man",
                genre: "Action",
                plot: "Tony Stark being awesome all the time"
            },
            {
                title: "The Hobbit",
                genre: "Epic Fantasy",
                plot: "A small person from The Shire defeats a dragon"
            },
            {
                title: "Harry Potter",
                genre: "Magic shit",
                plot: "A guy without nose is really bad and kills everyone"
            }
        ])
    })

    .then(celebrities => {
        mongoose.connection.close()
    })