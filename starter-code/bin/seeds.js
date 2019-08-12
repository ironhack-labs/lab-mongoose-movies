const Celebrity = require("../models/Celebrity");
const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost/${process.env.PORT}`)

const someCele = [
    {
        firstName: "Hans",
        lastName: "Garcia",
        occupation: "Tesla Hacker",
        catchPhrase: "Jesus buy a fucking Macbook"
    },
    {
        firstName: "Fabrizio",
        lastName: "Policarpo",
        occupation: "Drug Master",
        catchPhrase: "I prefer to be dead than being UX/UI Designer" 
    },
    {
        firstName: "Henry",
        lastName: "Hoyo",
        occupation: "Master House",
        catchPhrase: "Care chimba, bobo hijoeputa" 
    }
]

Celebrity.create(someCele)
.then( newCelebrity => console.log("Added new celebrity", newCelebrity))
.catch(err => console.log("An error happened ", err));
