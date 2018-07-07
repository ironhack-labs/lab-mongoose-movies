const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
    {
        name: "Buzz Lightyear",
        occupation: "Space Ranger",
        catchPhrase: "To infinity and beyond!"
    },
    {
        name: "Woody",
        occupation: "Sherif",
        catchPhrase: "There's a snake in my boot."
    },
    {
        name: "Master Chief",
        occupation: "Spartan",
        catchPhrase: "Thought I'd try shooting my way out. Mix things up a little."
    }
];

Celebrity.create(celebrities)
    .then((result) => {
        console.log('created ${result.length}')
    })
.catch((err)=>{
    console.log(err);
})