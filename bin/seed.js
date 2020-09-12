const mongoose = require("mongoose")
const Celebrity = require("../models/celebrity.model") 
const Movie = require("../models/movie.model")

const dbName = "web-mad-mongoose-movies"
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

// Remove the previous entries on the database to avoid duplicities
Celebrity.collection.drop()
Movie.collection.drop()

// Seed the Celebrities collection
const celebrities = [
    {
        name: "Lois McMaster Bujold",
        ocupation: "Writer",
        catchPhrase: "Miles, deja en paz a tu primo Iván"
    },
    {
        name: "Ursula K. Le Guin",
        ocupation: "Writer",
        catchPhrase: "Sólo en el silencio la palabra, sólo en la oscuridad la luz."
    },
    {
        name: "Ann Leckie",
        ocupation: "writer",
        catchPhrase: "Breq, ¡NO!"
    }
]

Celebrity.create(celebrities)
    .then(allCelebrities => console.log(`Se han añadido ${allCelebrities.length} a ${dbName}`))
    .catch(err => console.log(`Ups, an error: ${err}`))


// Seed the Movies collection
const movies = [
    {
        title: "Kung Fu Panda 2",
        genre: "Action",
        plot: "Po and his friends fight to stop a peacock villain from conquering China with a deadly new weapon, but first the Dragon Warrior must come to terms with his past."
    },
    {
        title: "The Princess Bride",
        genre: "Comedy",
        plot: "While home sick in bed, a young boy's grandfather reads him the story of a farmboy who encounters numerous obstacles, enemies and allies in his quest to be reunited with his true love. Contains pirates"
    },
    {
        title: "Snatch",
        genre: "Comedy",
        plot: "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond."
    }
]


Movie.create(movies)
    .then(allMovies => console.log(`A total of ${allMovies.length} has added to ${dbName}`))
    .catch(err => console.log(`Ups, an error: ${err}`))
    
//  mongoose.connection.close(() => console.log('Mongoose default connection disconnected through app termination'))