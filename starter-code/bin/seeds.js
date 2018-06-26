const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const dbName = 'mongooseMovies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrity = [{
        name: "Arnold Schwarzenegger",
        occupation: "Actor",
        catchPhrase: "I'll be back"
    },
    {
        name: "Heath Ledger",
        occupation: "Actor",
        catchPhrase: "Why so serious?"
    },
    {
        name: "Anakin Skywalker",
        occupation: "Sith Lord",
        catchPhrase: "No, I am your father."
    }
];

const movie = [
    {
        title: "Pootie Tang" ,
        genre: "Comedy" ,
        plot: "Pootie Tang, the musician/actor/folk hero of the ghetto, is chronicled from his early childhood to his battles against the evil Corporate America, who try to steal his magic belt and make him sell out by endorsing addictive products to his people. Pootie must learn to find himself and defeat the evil corporation for all the young black children of America, supatime."
    },
    {
        title: "The Matrix",
        genre: "Action",
        plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
    },
    {
        title: "Forrest Gump",
        genre: "Drama",
        plot: "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75."
    }
];

// Celebrity.create(celebrity, (err) => {
//     if (err) {throw err}
//     console.log(`created ${celebrity.length} entries`);
// });

// Movie.create(movie, (err) => {
//     if (err) {throw err}
//     console.log(`created ${movie.length} entries`);
// });