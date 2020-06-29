// const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity');

// mongoose.connect(`mongodb://localhost/celebrityDB`);
// Celebrity.collection.drop();

// const celebrities = [{
//     name: "Kanye West",
//     occupation: "rapper",
//     catchPhrase: "I am the greatest!"
// },
// {
//     name: "Matthew McConaughey",
//     occupation: "actor",
//     catchPhrase: "Alright, alright, alright."
// },
// {
//     name: "Arnold Schwarzenegger",
//     occupation: "actor",
//     catchPhrase: "I'll be back."
// }]

// Celebrity
//     .create(celebrities) 
//         .then(allCelebrities => {
//             console.log(`The celebrities have been created!`, allCelebrities)
//             mongoose.connection.close()
//         })
//         .catch(err => console.log(`There was an error fetching the celebrities`, err))
    
//MOVIE//

const mongoose = require('mongoose');
const Movie = require('../models/movie-model');

mongoose.connect(`mongodb://localhost/celebrityDB`);
Movie.collection.drop();

const movies = [{
    title: "Shawshank Redemption",
    genre: "Drama",
    plot: "Andy Dufresne goes to prison and makes lifelong friends."
},
{
    title: "Finding Nemo",
    genre: "Family",
    plot: "Marlin, a cowardly goldfish, must find his son Nemo in the depths of the ocean."
},
{
    title: "Goodfellas",
    genre: "Drama",
    plot: "The rise of Henry Hill in a New Yrok crime family."
}]

Movie
    .create(movies)
    .then(allMovies => {
        console.log(`Created ${allMovies.length} movies!`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Error: ', err))

    
