//IT 1
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const dbName = "lab-mongoose-movies"; //Este nombre debe ser el mismo que en app.js linea 14 o no conectará a la DB
const mongoUrl = `mongodb://localhost/${dbName}`;
const mongoConfig = {
    useNewUrlParser: true
};
mongoose.connect(mongoUrl, mongoConfig);

/*const celebritiesList = [{
        name: "Veneno",
        occupation: "Prostitute",
        catchPhrase: "Chupa y mama que se derrama"
    },
    {
        name: "La Piojo",
        occupation: "Influencer",
        catchPhrase: "Y tu quién ereh"
    },
    {
        name: "Yaoming",
        occupation: "Meme",
        catchPhrase: "Yaoming face"
    }
];

Celebrity.create(celebritiesList)
    .then(celebrities => console.log(`${celebrities.length} celebrities have been created`))
    .catch((err) => console.log(`Error ocurred while creating the celebs in MongoDB: ${err}`));

//node bin/seeds.js para añadirlo a la DB

*/

const moviesList = [{
        title: "Hannah Montana",
        genre: "The best",
        plot: "Too looong to explain",
    },
    {
        title: "2 fast 2 furious",
        genre: "Romantic, drama",
        plot: "Lots of cars, explosions, nitro and kisses",
    },
    {
        title: "Transformers",
        genre: "Unkwown",
        plot: "More cars and more explosions and kisses",
    }
];

Movie.create(moviesList)
    .then(movies => console.log(`${movies.length} movies have been created`))
    .catch((err) => console.log(`Error ocurred while creating the movies in MongoDB: ${err}`));