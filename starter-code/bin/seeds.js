const Celebrity = require("../models/Celebrity.model")
const connectDb = require("../config/connectDb");
const mongoose = require("mongoose")

const celebrities = [
    {
        name: "Al Pacino",
        occupation: "Actor",
        catchPhrase: "Vanity is my favourite sin."
    },
    {
        name: "Robert Downey Jr. ",
        occupation: "Actor",
        catchPhrase: "i Know very little about acting. I'm just and incredibly gifted faker"
    },
    {
        name: "Leonardo DiCaprio",
        occupation: "Actor",
        catchPhrase: "You don't need an Oscar to be a great actor"
    }
];

async function seedDb(){
    try {
        connectDb();
        const books = await Celebrity.create(celebrities)
        console.log(celebrities)
        mongoose.connection.close()
    }catch(err){
        console.error(err)
    }
}

seedDb()