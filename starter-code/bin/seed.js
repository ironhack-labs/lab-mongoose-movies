const mongoose = require('mongoose');
const Celebrities = require('../models/Celebrities.models');
const Movies = require('../models/Movies.models')

const dbName = 'Movies-and-Celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [{
        name: "Tom Holland",
        occupation: "Actor",
        catchPhrase: "The most important thing, in anything you do, is always trying your hardest, because even if you try your hardest and it's not as good as you'd hoped, you still have that sense of not letting yourself down. The harder you try, the better the impression you set on the people around you."
    },
    {
        name: "Robert Downey Jr.",
        occupation: "Actor",
        catchPhrase: "If I could eat whatever I wanted every day, I would have Domino's pizza with pasta carbonara inside every slice. And at night, I would have Neapolitan ice cream until I felt absolutely toxic."
    },
    {
        name: "Zendaya Maree",
        occupation: "actress",
        catchPhrase: "I wanted to show a lot of young ladies that you could be beautiful and just as stunning as everyone else without showing every single inch of your body."
    }
]

const movies = [
    {
        title: "Spiderman Homecoming",
        genre: "Accion",
        plot: "After the events of Captain America: Civil War, Peter Parker balances life as a normal teen with normal friends and being the newest and youngest vigilante, Spider-Man. But against the commands of his mentor, Tony Stark, Peter must go under the radar and investigate the mysterious new supervillain, The Vulture."
    },
    {
        title: "Avengers End Game",
        genre: "Accion",
        plot: "The grave course of events set in motion by Thanos, that wiped out half the universe and fractured the Avengers ranks, compels the remaining Avengers to take one final stand in Marvel Studios' grand conclusion to twenty-two films - Avengers: Endgame."
    },
    {
        title: "Spiderman Far From Home",
        genre: "Accion",
        plot: "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever. Our friendly neighborhood Super Hero decides to join his best friends Ned, MJ, and the rest of the gang on a European vacation."
    }
]

Movies.create(movies)
.then(newMovie => console.log(`Created ${movies.length} movies`))
.then(Celebrities.create(celebrities))
.then(newCelebritie => console.log(`Created ${celebrities.length} celebrities`))
.then(()=> mongoose.connection.close())
.catch(err => console.log("Error consultando la BBDD", err))