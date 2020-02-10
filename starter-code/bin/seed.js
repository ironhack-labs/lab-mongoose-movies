const mongoose = require("mongoose");
const Celebrety = require("../models/CelebModel");
require('dotenv').config();

const celebreties = [{
        name: "Arnold Schwarzenegger",
        occupation: "Govaneur (retired), actor",
        catchPhrase: "Hast la vista baby"
    },
    {
        name: "Celine Dion",
        occupation: "Nobody knows",
        catchPhrase: "Bring me some portwine, baby!"
    },
    {
        name: "Hulk Hogan",
        occupation: "San Francisco State Hospital",
        catchPhrase: "Reality Star"
    },
    {
        name: "Ryan Gosling",
        occupation: "Actor",
        catchPhrase: ".... ... ..."
    }
]

// 0. connect
mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    //1. drop db
    .then(connectionObj => {
        const promise = connectionObj.connection.dropDatabase();
        return promise
    })
    .then(() => {
        // 2. create the document from book array 
        // when it looks up the model, it checks if the corr. collection is already existent. if not it gets created. 
        return Celebrety.create(celebreties) //returns a promise --> needs the be forewarded to the next THEN
    })
    .then((createdCelebs) => {
        console.log("celebs now in db ", createdCelebs.length)
        // 3. close the collextion
        return mongoose.connection.close(); // also a promise
    })
    .then(() => console.log("connection closed"))
    .catch((err) => console.error('Error occured', err))