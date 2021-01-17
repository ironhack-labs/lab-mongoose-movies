const mongoose = require('mongoose');
const CelebrityModel = require("../models/celebrity.model");
const MoviesModel = require("../models/movie.model");

require("./../app"); 

const celebrities = [
    {name: "Goose Man",
    occupation: "Actor",
    catchPhrase: "Always willing to get the connections for you"},
    {name: "Aitor Menta",
    occupation: "Wind blower",
    catchPhrase: "Is it just me or it's getting cold?"},
    {name: "John Doe",
    occupation: "Unknown",
    catchPhrase: "Only if I knew..."},
]



const movies = [
    {title: "Sinister",
    genre: "Terror",
    plot: "booh"},
    {title: "Sinister 2",
    genre: "Terror",
    plot: "Booh reloaded"},
    {title: "Sinister 3",
    genre: "Terror",
    plot: "Super booh"},
  ]


mongoose.connection.once('open', () => {
    console.info(`*** Connected to the database ${mongoose.connection.db.databaseName} ***`);
    mongoose.connection.db.dropDatabase()
        .then(() => console.log(`- Database dropped`))
       .then(() => CelebrityModel.create(celebrities))
        .then(() => MoviesModel.create(movies))

        .catch(error => console.error(error))
})
