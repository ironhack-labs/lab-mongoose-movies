const mongoose = require ("mongoose");
const Celebrity = require("../models/celebrity.Model")
const Movie = require("../models/movie.model")

mongoose
  .connect('mongodb://localhost/starter-code', {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true}
  );

// const celebrities = [
//     {
//         name: "Rose",
//         occupation: "Singer",
//         catchphrase: "Catch me if you can" 
//     },
//     {
//         name: "Oliva",
//         occupation: "Dancer",
//         catchphrase: "Dance Dance Dance" 
//     },
//     {
//         name: "James",
//         occupation: "Writer",
//         catchphrase: "Hakuna matata" 
//     }
// ]

const movies = [
    {
        title: "Jurrasic Park",
        genre: "Dino",
        plot: "Dino's taking over" 
    },
    {
        title: "Hidden Figures",
        genre: "Space",
        plot: "Girl power" 
    },
    {
        title: "Theory of Everything",
        genre: "Bio",
        plot: "Theory of Steven Hawkings" 
    }
]

// Celebrity.create(celebrities)
//     .then(celebsInDB => {
//         console.log(`Created ${celebsInDB.length} celebs!`)
//         mongoose.connection.close();})
//     .catch(err => console.log(`An error occured: ${err}`));

Movie.create(movies)
    .then(movieInDB => {
        console.log(`Created ${movieInDB.length} movies!`)
        mongoose.connection.close();})
    .catch(err => console.log(`An error occured: ${err}`));
