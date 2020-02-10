const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');

const dbName = 'celebrity3';
mongoose.connect(`mongodb://localhost/${dbName}`)

const celebrities = [{
        name: "J.K. Rowling ",
        occupation: "Writer",
        catchPhrase: "Dumbledor is gay",

    },
    {
        name: "Meghan Markle",
        occupation: "Actress",
        catchPhrase: "Nice Suits",

    },
    {
        name: "Harper Lee ",
        occupation: "Writer",
        catchPhrase: "yooo",
    },
    {
        name: "Rick Sanchez",
        occupation: "Scientist",
        catchPhrase: "Wubba lubba dub dub!",
    },

]

Celebrity.create(celebrities, (err) => {
    if (err) {
        throw (err)
    }
    console.log(`Created ${celebrities.length} books`)
    mongoose.connection.close();
});

const Movie = require('../models/Movie.model');


const movies = [{
        title: "Bamby",
        genre: "Horror",
        plot: "Nature is scary",

    },
    {
        title: "Transformers",
        genre: "Action",
        plot: "The cars are alive",

    },
    {
        title: "To kill a mockingbird",
        genre: "Humor",
        plot: "People are racist",
    },
    {
        title: "Avengers: Endgame",
        genre: "Superheroes",
        plot: "Iron-Man dies",
    },

]

Movie.create(movies, (err) => {
    if (err) {
        throw (err)
    }
    console.log(`Created ${movies.length} movies`)
    mongoose.connection.close();
});