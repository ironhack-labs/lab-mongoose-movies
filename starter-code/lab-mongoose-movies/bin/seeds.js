const mongoose = require('mongoose');
const Celebrities = require('../models/Celebrities');

mongoose.connect("mongodb://localhost:27017/lab-mongoose-movies", {useNewUrlParser: true});

const celebrities = [
    {
        name: "Arnold Schwarzenegger",
        occupation: "The best fucking action hero",
        catchPhrase: "Hasta la vista baby"
    },
    {
        name: "Michael Jordan",
        occupation: "King of Basketball",
        catchPhrase: "Talent wins games, but teamwork and intelligence wins championships"
    },
    {
        name: "Freddie Mercury",
        occupation: "Music Legend",
        catchPhrase: "Who wants to live forever?"
    },
    {
        name: "Nelson Mandela",
        occupation: "Pacifist politician",
        catchPhrase: "Do not judge me by my successes, judge me by how many times I fell down and got back up again."
    }
];

Celebrities.create(celebrities, err => {
    if (err) throw err;
    console.log(`Creadas ${celebrities.length} celebridades`)
    mongoose.connection.close()
})

