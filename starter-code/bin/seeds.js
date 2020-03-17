const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movies = require('../models/movies');

const dbtitle = 'Celebrity-db';
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true, useUnifiedTopology: true });
Celebrity.collection.drop();
Movies.collection.drop();

let arrayCelebrity = [
    {
        name: "paris hilton",
        occupation: "rich",
        catchPhrase: "aaaaaa",
    },
    {
        name: "Gemma Arterton",
        occupation: "actor",
        catchPhrase: "bbbbbbb",
    },
    {
        name: "Rowan Atkinson",
        occupation: "actor",
        catchPhrase: "asdfasdfasdf",
    },

]
let arrayMovie = [
    {
        title: "Avatar",
        genre: "animation",
        plot: "fasdf"

    },
    {
        title: "lñaksdf",
        genre: "animation",
        plot: "fasdf"

    },
    {
        title: "Avasdfatar",
        genre: "animation",
        plot: "fasdf"

    },


]


Celebrity.create(arrayCelebrity)
    .then(data => console.log("registros grabados", data))
    .catch(err => console.log("Error while creating the celebrity's: ", err))
Movies.create(arrayMovie)
    .then(data => console.log("registros grabados", data))
    .then(() => mongoose.disconnect())
    .catch(err => console.log("Error while creating the movies: ", err))
