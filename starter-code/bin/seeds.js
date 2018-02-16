const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/celebrities");

const Celebrity = require("../models/Celebrity.js");

const celebrities = [
    {
        name: "Leonardo DiCaprio",
        occupation: "Actor",
        catchPhrase: "I'll inception your dreams",
    },
    {
        name: "Bradley Cooper",
        occupation: "Actor",
        catchPhrase: "I'm limitless",
    },
    {
        name: "Anne Hathaway",
        occupation: "Actress",
        catchPhrase: "The devil wears Prada",
    },
]

Celebrity.create(celebrities, (err,result) => {
    if (err) {
        console.log("Error")
    } else {
    result.forEach((celeb) => console.log(`The celebrity ${celeb} has been created successfully`));
    }
});
