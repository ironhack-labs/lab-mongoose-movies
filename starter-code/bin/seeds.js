const mongoose = require('mongoose')
const Movie = require('../models/Movie')

mongoose.connect("mongodb://localhost:27017/mongooseMovies",()=> console.log('Conectado, estimado'));


const movies = [
    {
        title: "Jaws",
        genre: "Thriller",
        plot: "Is Jaws a horror film? For those who worry that it’s “not safe to go back in the water,” then most certainly it is. "
    },
    {
        title: "No country for old men",
        genre: "Thriller",
        plot: "Is Jaws a horror film? For those who worry that it’s “not safe to go back in the water,” then most certainly it is. "
    },
    {
        title:"Schindler’s List ",
        genre:"Drama",
        plot: "Spielberg seemingly gives his all to the story of a selfish businessman (Liam Neeson kicks surprisingly little Nazi ass here) gradually coming to terms with the inhuman atrocities of the Holocaust, putting his life on the line to save as many Jews as he can."
    }

];

Movie.create(movies)
    .then(movies=>{
        console.log(`Created ${movies.length} movies`)
        mongoose.connection.close()
    })
    .catch(e=>{console.log(e)})


/*
const celebrities = [
    {
        name: "The Rock",
        occupation: "Actor",
        catchPhrase: "BootsToAsses"
    },
    {
        name: "Arnold Schwarzenegger",
        occupation: "Actor, Politician",
        catchPhrase: "Hasta la vista baby"
    },
    {
        name: "Neil Patrick Harris",
        occupation: "Actor, ",
        catchPhrase: "Legen...Wait for it...Dary"
    }
];



Celebrity.create(celebrities)
    .then(celebrities=>{console.log(`Created ${celebrities.length} celebrities`)
        mongoose.connection.close()});

*/