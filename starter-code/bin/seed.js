require("./../config/mongodb");

// const CelebrityModel = require("./../models/Celebrity");

// const baseCelebrities = [
//   {
//     name: "Kim Kardashian",
//     occupation: "Unknown",
//     catchPhrase: "I'm kind of shocked I'm getting a fashion award when I'm naked most of the time."

// },
// {
//     name: "Kanye West",
//     occupation: "Singer",
//     catchPhrase: "I still think I am the greatest."
// },
// {
//     name: 'Scott Disick',
//     occupation: "Unknown",
//     catchPhrase: "I'm not gonna go eat at a restaurant like a peasant"
// }
// ]


// CelebrityModel.create(baseCelebrities)
// .then(dbRes => console.log("all good, base celebrities created"))
// .catch(dbErr => console.log(dbErr))

const MovieModel = require("./../models/Movie");

const baseMovies = [
    {
        title: "Ironhack",
        genre: "Drama",
        plot: "16 people came to a web dev bootcamp with one ambition in mind: becoming developper. But, they will quickly realize that the adventure is harder than expected... who will stay and who will give up?"
    },
    {
        title: "toto",
        genre: "Comedie",
        plot: "discover how toto can be implemented in all your programs"
    }
]

MovieModel.create(baseMovies)
.then(dbRes => console.log("all good, base movies created"))
.catch(dbErr => console.log(dbErr))

