const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

//Db creation
const dbName = "Celebrity";
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [{
        name: "Arnold Schwarzenegger",
        occupation: "Actor",
        catchPhrase: "Hasta la vista baby"
    },
    {
        name: "Tony Hawk",
        occupation: "Skater",
        catchPhrase: "Lets Rock!"
    },
    {
        name: "Anthony kidies",
        occupation: "Singer",
        catchPhrase: "Dream of californication"
    }
];

Celebrity.create(celebrities, err => {
    if (err) {
        throw err;
    }
    console.log(`Created ${celebrities.length} celebrities`);
    mongoose.connection.close();
});