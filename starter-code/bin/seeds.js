const Celebrity = require("../models/Celebrity.model")
const Movie = require("../models/Movie.model")
const connectDb = require("../config/connectDb");
const mongoose = require("mongoose")

const celebrities = [
    {
        name: "Al Pacino",
        occupation: "Actor",
        catchPhrase: "Vanity is my favourite sin."
    },
    {
        name: "Robert Downey Jr. ",
        occupation: "Actor",
        catchPhrase: "i Know very little about acting. I'm just and incredibly gifted faker"
    },
    {
        name: "Leonardo DiCaprio",
        occupation: "Actor",
        catchPhrase: "You don't need an Oscar to be a great actor"
    }
];

const movies = [
    {
        title: "The Godfather",
        genre: "drama",
        plot: "Michael, the young and idealistic son of Vito Corleone, the head of the most powerful Mafia clan in New York, returns home as a war hero and is determined to live his own life. But tragic circumstances make him face the legacy of his family."
    },
    {
        title: "Iron Man",
        genre: "Sci-Fi",
        plot: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil."
    },
    {
        title: "The Wolf of Wall Street",
        genre: "Comedy",
        plot: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government."
    }
]

/*async function seedDb(){
    try {
        connectDb();
        const addCelebs = await Celebrity.create(celebrities)
        mongoose.connection.close()
    }catch(err){
        console.error(err)
    }
}

seedDb()*/

async function seedDb(){
    try {
        connectDb();
        const addMovies = await Movie.create(movies)
        console.log(addMovies)
        mongoose.connection.close()
    }catch(err){
        console.error(err)
    }
}

seedDb()
