const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')
const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost/lab-celebrity', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

var celebrityData = [{
    name: 'Judd Apatow',
    occupation: 'Director',
    catchPhrase: 'Apatow Kapow!'
}, {
    name: 'Martin Scorcese',
    occupation: 'Weirdo',
    catchPhrase: 'Scorcese aint da way-zee'
}, {
    name: 'Wes Anderson',
    occupation: 'Lines up lines',
    catchPhrase: "Let's make this shot perfectly parallel"
}]

var movieData = [{
    title: 'Downton Abbey',
    genre: 'Drama',
    plot: 'The continuing saga of the Crawley family and the servants who work for them in the English countryside in the early 20th century.'
}, {
    title: 'Hustlers',
    genre: 'Drama/Thriller',
    plot: 'Working as a stripper to make ends meet, Destiny\'s life changes forever when she becomes friends with Ramona -- the club\'s top money earner. Ramona soon shows Destiny how to finagle her way around the wealthy Wall Street clientele who frequent the club. But when the 2008 economic collapse cuts into their profits, the gals and two other dancers devise a daring scheme to take their lives back.'
}, {
    title: 'It: Part 2',
    genre: 'Horror',
    plot: 'Defeated by members of the Losers\' Club, the evil clown Pennywise returns 27 years later to terrorize the town of Derry, Maine, once again. Now adults, the childhood friends have long since gone their separate ways. But when people start disappearing, Mike Hanlon calls the others home for one final stand. Damaged by scars from the past, the united Losers must conquer their deepest fears to destroy the shape-shifting Pennywise -- now more powerful than ever.'
}, {
    title: 'Rambo: Last Blood',
    genre: 'Thriller/Action',
    plot: 'When a friend\'s daughter is kidnapped, Rambo crosses the U.S.-Mexico border to bring her home but finds himself up against one of Mexico\'s most ruthless cartels.'
}]

Movie.deleteMany({}, () => null)
Celebrity.deleteMany({}, () => null)
movieData.map(data => Movie.create(data))
celebrityData.map(data => Celebrity.create(data))