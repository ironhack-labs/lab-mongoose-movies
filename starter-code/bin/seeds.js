const Celebrity = require('./../models/celebrity');
const mongoose = require('mongoose');
const DB_NAME = "celebritiesLab"


const starterCelebrities = [
    {
        name: "Anna Summer",
        ocupattion: "Journalist",
        catchPhrase: "Don't look at me"
    },
    {
        name: "Ramone Floor",
        ocupattion: "Singer",
        catchPhrase: "Let me sing for you"
    },
    {
        name: "Demitria Hop",
        ocupattion: "Actress",
        catchPhrase: "I've never won an Oscar"
    }
]

mongoose.connect(`mongodb://localhost/${DB_NAME}`)
.then(() => {
    console.log('Connected to database only to create the first information');
    Celebrity.insertMany(starterCelebrities)
        .then(starterCelebrities => { console.log(`${starterCelebrities.length} inserted.`) })
})
.catch(error => console.error(error));


