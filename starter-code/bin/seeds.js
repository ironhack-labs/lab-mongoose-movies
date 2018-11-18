const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

mongoose
    .connect('mongodb://localhost/starter-code', { useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });


const movies = [
    {
        title: "The Godfather",
        genre: "Gangster",
        plot: "In 1945, at his daughter Connie's wedding, Don Vito Corleone ..."

    },
    {
        title: "The Shawshank Redemption",
        genre: "Drama",
        plot: "In 1947 Portland, Maine, banker Andy Dufresne is convicted of murdering ..."

    },
    {
        title: "Pulp Fiction",
        genre: "Gangster",
        plot: "Pulp Fiction's narrative is told out of chronological order ..."

    }
];

Movie.create(movies, (err) => {

    if (err) { throw (err) }
    console.log(`Created ${movies.length} movies`)
    mongoose.connection.close()
});


// const celebrities = [
//     {
//         name: "George Orwell",
//         occupation: "Novelist",
//         catchPhrase: "Who controls the past controls the future. Who controls the present controls the past."

//     },
//     {
//         name: "Emma Watson",
//         occupation: "Actress",
//         catchPhrase: "The less you reveal, the more people can wonder."

//     },
//     {
//         name: "Kase O",
//         occupation: "Rapper",
//         catchPhrase: "La vida es simple recibes de lo que has dado y para ser feliz tan solo hay que olvidar el pasado"

//     }
// ];

// Celebrity.create(celebrities, (err) => {

//     if (err) { throw (err) }
//     console.log(`Created ${celebrities.length} celebrities`)
//     mongoose.connection.close()
// });