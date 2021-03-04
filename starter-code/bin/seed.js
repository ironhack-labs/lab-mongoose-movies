require("dotenv").config();
require("./../config/mongo"); 
const ArtistModel = require("./../models/celebrity");

const celebrities = [
    {
        name: "Kim Kardashian",
        occupation: "drama",
        catchPhrase: "I am just at a point in my life where I don't want to be naive anymore. And I want to use my platform to get other people involved"
    },
    {
        name: "Brad Pitt",
        occupation: "actor",
        catchPhrase: "I'm one of those people you hate because of genetics. It's the truth."    }
]

ArtistModel.insertMany(celebrities)
    .then(celeb => console.log(celeb))
    .catch(err => console.log(error))