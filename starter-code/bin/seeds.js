const mongoose = require("mongoose");
const CelebrityModel = require("../model/celebrity");

mongoose
    .connect('mongodb://localhost/lab-mongoose-movies', {useNewUrlParser: true})
    .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
    console.error('Error connecting to mongo', err)
    });

const celebrity = [
    {
        name: "Tom Cruise",
        occupation: "actor",
        catchPhrase: "Show me the money!"
    },
    {
        name: "Beyonce",
        occupation: "singer",
        catchPhrase: "You know you’re that bitch when you cause all this conversation."
    },
    {
        name: "Claude Monet",
        occupation: "painter",
        catchPhrase: "Beyond painting and gardening, I am good for nothing."
    }
];


function createCelebrity(data) {
    CelebrityModel.create(data, function(err, ans) {
        console.log('Celebrity is created!');
    });
}

createCelebrity(celebrity);

// OR:

// CelebrityModel.insertMany(celebrities)
//     .then(dbRes => console.log("it went fine"))
//     .catch(dbErr => console.log(dbErr));






