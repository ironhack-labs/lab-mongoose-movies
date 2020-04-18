const mongoose = require('mongoose')
const Celebrity = require('../model/celebrity-model')
const Movie = require('../model/movie-model')

mongoose.connect('mongodb://localhost/starter-code', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const celebritiesConst = [{
        name: 'Benedict Cumberbacht',
        occupation: 'Actor',
        catchPhrase: `I've seen and swam and climbed and lived and driven and filmed.Should it all end tomorrow, I can definitely say there would be no regrets.I am very lucky, and I know it.I really have lived 5, 000 times over.`
    },
    {
        name: 'Christopher Nolan',
        occupation: 'Director',
        catchPhrase: `I think there's a vague sense out there that movies are becoming more and more unreal. I know I've felt it.`
    },
    {
        name: 'Colleen Hoover',
        occupation: 'Writer',
        catchPhrase: `Don't take life too seriously.Punch it in the face when it needs a good hit.Laugh at it.`
    }
]
const moviesConst = [{
        name: 'enigma',
    },
]

Celebrity.create(celebritiesConst)
    .then(allCelebs => {
        console.log(`${allCelebs.length} celebs created!`)
        mongoose.connection.close()
    })
    .catch(err => console.log(`An error ocurred: ${err}`))

Movie.create(moviesConst)
    .then(allMovies => {
        console.log(`${allMovies.length} movies created!`)
        mongoose.connection.close()
    })
    .catch(err => console.log(`An error ocurred: ${err}`))