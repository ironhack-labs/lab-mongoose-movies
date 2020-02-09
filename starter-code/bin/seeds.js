const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');
const Movie = require("../models/movie.model")

const dbName = 'mongooseMovies';
mongoose.connect(`mongodb://localhost/${dbName}`)

const celebrities = [{
        name: "Ryan Reynolds",
        occupation: "Actor",
        catchPhrase: "When I meet thousands of fans of the comic - when I realize every one of them can recite the Lantern Corps oath ('In Brightest Day, in blackest night...') - I know how important this is to people.",
    },

    {
        name: "Harry Styles",
        occupation: "Singer",
        catchPhrase: "You're never going to get used to walking into a room and have people screaming at you. There's a lot of things that come with the life you could get lost in. But you have to let it be what it is. I've learnt not to take everything too seriously.",
    },
    {
        name: "Hugh Jackman",
        occupation: "Actor",
        catchPhrase: "When you're playing an icon like Wolverine, it's sometimes better to be someone that nobody knows because they don't know what to expect. I don't mind a little bit of anonymity; it helps on the subway.",
    },
];

Celebrity.insertMany(celebrities)

const movies = [{
        title: "Deadpool",
        genre: "Sci fi",
        plot: "After a fast-talking mercenary is diagnosed with terminal cancer, he finds the possibility of healing in a scientific experience of a covert organization. Recovered, with accelerated healing factor and an unusual sense of humor, he adopts the alter-ego Deadpool to seek revenge against the man who destroyed his life (and his face).",
    },
    {
        title: "The Wolverine",
        genre: "Sci fi",
        plot: "Wolverine comes to Japan to meet an old friend whose life he saved years ago, and gets embroiled in a conspiracy involving yakuza and mutants.",
    }, {
        title: "The Witcher",
        genre: "Fantasy",
        plot: "The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts. ... Geralt of Rivia is a witcher, a mutant with special powers who kills monsters for money.",
    },
];

Movie.insertMany(movies)