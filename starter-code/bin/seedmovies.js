// MOVIES

const mongoose = require('mongoose')
const Movie = require('../models/movie')

mongoose.connect(`mongodb://localhost/starter-code`)

const movies = [
    {
        title: 'Lock, Stock and Two Smoking Barrels',
        genre: 'Crime comedy',
        plot: `The story is a heist involving a self-confident young card sharp who loses £500,000 to a powerful crime lord in a rigged game of three-card brag. To pay off his debts, he and his friends decide to rob a small-time gang who happen to be operating out of the flat next door.`
    },
    {
        title: 'Snatch',
        genre: 'Crime comedy',
        plot: `Set in the London criminal underworld, the film contains two intertwined plots: one dealing with the search for a stolen diamond, the other with a small-time boxing promoter (Jason Statham) who finds himself under the thumb of a ruthless gangster (Alan Ford) who is ready and willing to have his subordinates carry out severe and sadistic acts of violence.`
    },
    {
        title: 'RocknRolla',
        genre: 'Crime comedy',
        plot: `When a Russian mobster orchestrates a crooked land deal, millions of dollars are up for grabs, drawing in the entire London underworld into a feeding frenzy at a time when the old criminal regime is losing turf to a wealthy foreign mob. Lenny Cole, a London mob boss, puts the bite on all local real estate transactions.`
    }
]

Movie.create(movies, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${movies.length} movies`)
    mongoose.connection.close()
})