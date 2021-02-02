require("../app.js")

const mongoose = require('mongoose');

const Celebrity = require("../models/celebrity")

const Movie = require("../models/movie")
/*
const initialLoad = [
    {
        name: 'Lionel Messi',
        occupation: 'Sports',
        catchPhrase: 'Ola k ase',
    },
    {
        name: 'Jeff Bridges',
        occupation: 'Actor',
        catchPhrase: 'The Dude says',
    },
    {
        name: 'Donald Trump',
        occupation: 'Politian',
        catchPhrase: `Grab'em by the p...`,
    },
]
*/
const initialLoad = [
    {
        title: 'Casablanca',
        genre: 'Old',
        plot: 'B&W stuff',
    },
    {
        title: 'Avatar',
        genre: 'SCI-FI',
        plot: 'Boring',
    },
    {
        title: 'The Big Lebowski',
        genre: 'Comedy',
        plot: 'Master piece',
    },
]
/*
Celebrity.deleteMany()
.then(() => {
    Celebrity.create(initialLoad)
})
.then(() => {
    for (i=0; i<initialLoad.length; i++) {
        console.log(`Inserted ${initialLoad[i].name}`)
    }
})
.finally(() => {
    setTimeout(function(){ 
        mongoose.connection.close(); 
    }, 1000);
})
.catch(() => console.log('Error creating DB initial load'))
*/
Movie.deleteMany()
.then(() => {
    Movie.create(initialLoad)
})
.then(() => {
    for (i=0; i<initialLoad.length; i++) {
        console.log(`Inserted ${initialLoad[i].title}`)
    }
})
.finally(() => {
    setTimeout(function(){ 
        mongoose.connection.close(); 
    }, 1000);
})
.catch(() => console.log('Error creating DB initial load'))