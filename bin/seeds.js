const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.model");
require("../configs/db.config");


let celebrities = [
    {
        name: "Rihanna",
        occupation: "Singer",
        catchPhrase: "Under my umbrella ella ella eh eh eh"
    },
     {
        name: "Donald McDonal",
        occupation: "Chef",
        catchPhrase: "I'm loving it"
    },
     {
        name: "Daddy Yankee",
        occupation: "Singer",
        catchPhrase: "Give me more fuel"
    }
]

Celebrity.create(celebrities, (err) => {
    if (err) {throw(err) }
    console.log(`created ${celebrities.length} celebrities`);
    mongoose.connection.close()  
});
