const mongoose = require("mongoose");
const faker = require("faker");
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// db connection
function dbConnect(cb) {
    mongoose
        .connect("mongodb://localhost/celebrities", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(x => {
            console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
            cb();
        })
        .catch(err => {
            console.error("Error connecting to mongo", err);
        });
}
// dbConnect(() => {
//     // mongoose models import so we can CRUD the data
//     const Celebrities = require("../models/celebrity");

//     const fakeCelebrities = Array(6)
//         .fill()
//         .map(() => {
//             const occupation = ["Actor", "Singer", "Comedian"];

//             return {
//                 name: faker.name.firstName(),
//                 occupation: occupation[randomInt(0, occupation.length - 1)],
//                 catchPhrase: faker.lorem.paragraph(),
//                 img: `http://lorempixel.com/640/480/animals/${randomInt(1, 10)}`
//             };
//         });

//     Celebrities.deleteMany()
//         .then(() => {
//             return Celebrities.create(fakeCelebrities);
//         })
//         .then(() => {
//             console.log("succesfully added celebrities to the data");
//             mongoose.connection.close();
//             process.exit(0);
//         });
// });

dbConnect(() => {
    const Movies = require('../models/movies');

    const fakeMovies = Array(6)
        .fill()
        .map(() => {
            const genre = ['drama', 'action', 'comedian', 'superhero']

            return {
                title: faker.name.jobTitle(),
                genre: genre[randomInt(0, genre.length - 1)],
                plot: faker.lorem.paragraphs(),
                img: faker.image.abstract()
            }
        })
    Movies.deleteMany()
        .then(() => {
            return Movies.create(fakeMovies)
        })
        .then(() => {
            console.log('succesfully added the movies to te data')
            mongoose.connection.close()
            process.exit(0)
        })
})