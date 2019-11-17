const mongoose = require('mongoose');
const Celebrities = require("../models/Celebrity");
const Movies = require("../models/Movie");

mongoose
    .connect('mongodb://localhost/movies', { useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });


const celebrities = [
    {
        name: "Mae West",
        occupation: "Actress",
        catchPhrase: "Good girls go to heaven, bad girls go everywhere"
    },
    {
        name: "Wiston Churchill",
        occupation: "Politician",
        catchPhrase: "Success is walking from failure to failure with no loss of enthusiasm."
    },
    {
        name: "Charles Darwin",
        occupation: "Scientist",
        catchPhrase: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change"
    },
    {
        name: "Oscar Wilde",
        occupation: "Writer",
        catchPhrase: "Be yourself; everyone else is already taken."
    }
]

const movies = [
    {
        title : "The Open House",
        genre : "Thriller",
        plot : "Following a tragedy, a mother and her teen son move to a relative's vacant vacation home, where eerie and unexplained forces conspire against them."
    },
    {
        title : "The King",
        genre : "Drama",
        plot : "Wayward Prince Hal must turn from carouser to warrior king as he faces hostilities from inside and outside the castle walls in the battle for England."
    },
    {
        title : "Paradox",
        genre : "Independent",
        plot : "Neil Young and his band of outlaws sow seeds of strange mischief and musical wonder under Western skies in this dreamlike film by Daryl Hannah."
    },
    {
        title : "The Little Switzerland",
        genre : "Comedy",
        plot : "The discovery of the tomb of William Tell’s son in a town in the Basque Country spurs the village's cantankerous citizens to lobby for Swiss annexation."
    }

]

Celebrities
    .deleteMany()
    .then(() => {
        Celebrities
            .insertMany(celebrities)
            .then(data => console.log(`Added to the database: \n ${data}`))
            .catch(err => console.log(`There was an error: \n ${err}`))
    })


Movies
    .deleteMany()
    .then(() => {
        Movies
            .insertMany(movies)
            .then(data => console.log(`Added to the database: \n ${data}`))
            .catch(err => console.log(`There was an error: \n ${err}`))
    })
