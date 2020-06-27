const mongoose = require("mongoose")
const Celebrity = require("../models/Celebrity.model")
const Movie = require("../models/Movie.model")

mongoose.connect(`mongodb://localhost/celebrityDb`)

Celebrity.collection.drop()
Movie.collection.drop()

const celebrities = [{
        name: "Ariana Grande",
        occupation: "singer",
        catchPhrase: "Nothing burns more calories than dancing in 5-inch heels... try it!"
    },
    {
        name: "Jennifer Lopez",
        occupation: "singer",
        catchPhrase: "I judge people on how they smell, not how they look"
    },
    {
        name: "Jennifer Lawrence",
        occupation: "actress",
        catchPhrase: " If I don't have anything to do all day, I might not even put my pants on"
    }
]
const movies = [{
        title: "Forrest Gump",
        genre: "Comedy-drama",
        plot: "Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life."
    }, {
        title: "The Truman Show",
        genre: "Comedy",
        plot: "He doesn't know it, but everything in Truman Burbank's (Jim Carrey) life is part of a massive TV set. Executive producer Christof (Ed Harris) orchestrates 'The Truman Show,' a live broadcast of Truman's every move captured by hidden cameras."
    },
    {
        title: "The Intouchables",
        genre: "Drama",
        plot: "A Parisian aristocrat, quadriplegic since a paragliding accident, hires a young man to be his live-in caretaker. Although very different the two men bond and develop a close friendship."

    }
]

Promise.all([Celebrity.create(celebrities), Movie.create(movies)]).then(data => {
        console.log("The following data has been introduced to the DDBB", data)
        mongoose.connection.close(() => console.log("Connection closed after seeding"))
    })
    .catch(err => console.log(`There was an error while seeding:`, err))




// Celebrity.create(celebrities)
//     .then(allCelebrities => console.log(`The following celebrities have been created :`, allCelebrities))
//     .then(() => Movie.create(movies))
//     .then(allMovies => {
//         console.log(`The following movies have been created :`, allMovies)
//         mongoose.connection.close(() => console.log("Connection closed after seeding"))
//     })
//     .catch(err => console.log(`There was an error while seeding:`, err))