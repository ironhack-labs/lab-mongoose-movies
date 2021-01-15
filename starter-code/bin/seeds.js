const mongoose = require('mongoose');
const CelebrityModel = require("../models/celebrity.model");
require("./../app"); 

const celebrities = [
    {
        name: "Tom Hanks",
        occupation: "Actor",
        catchPhrase: "Run Forrest, run!"
    },
    {
        name: "Cyndi Lauper",
        occupation: "Singer",
        catchPhrase: "Girls Just Want to Have Fun"
    },
    {
        name: "Pajares y Esteso",
        occupation: "Actores",
        catchPhrase: "Corre Manolo, que te van a pillar"
    },
]

mongoose.connection.once('open', () => {
    console.info(`*** Connected to the database ${mongoose.connection.db.databaseName} ***`);
    mongoose.connection.db.dropDatabase()
        .then(() => console.log(`- Database dropped`))
        .then(() => CelebrityModel.create(celebrities))
        .catch(error => console.error(error))
})

