const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mongoose-movies", {
    useNewUrlParser: true
});

const Celebrity = require("../models/Celebrity");

const celebrities = [
    {
        name: "Michael Jackson",
        occupation: "Musician ",
        catchPhrase: "Chimone"
    },
    {
        name: "Denzel Washington",
        occupation: "Actor",
        catchPhrase: "My man"
    },
    {
        name: "Cristiano Ronaldo",
        occupation: "Footballer",
        catchPhrase: "Siiiiiiiiiiiuuuu"
    }
];

Celebrity.insertMany(celebrities)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
