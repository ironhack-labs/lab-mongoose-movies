const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');
const Movie = require('./../models/movie.model')

const dbName = 'celebrities-lab';
mongoose.connect(`mongodb://localhost/${dbName}`);

Movie.collection.drop()
Celebrity.collection.drop()

const celebrities = [
    {
        image: '/images/JaredLeto.jpg',
        name: 'Jared Leto',
        occupation: 'Actor/musician',
        catchPhrase: "It's not like I'm hanging out at shopping malls or going to celebrity golf tournaments. I'm so in my own little world. I got my dog, my music, my brother, a couple of friends."
    },
    {
        image: '/images/mathewMac.jpg',
        name: 'Matthew McConaughey',
        occupation: 'Actor',
        catchPhrase: "Alright, alright, alright."
    },
    {
        image: '/images/Trevor_Noah.jpg',
        name: 'Trevor Noah',
        occupation: 'Comedian',
        catchPhrase: "Growing up in a home of abuse, you struggle with the notion that you can love a person you hate, or hate a person you love. It’s a strange feeling."
    }
]

const movies = [
    {
        image: '/images/The Imitation Game (2014).jpg',
        title: 'The Imitation Game',
        genre: 'Biography, Drama, Thriller',
        plot: 'During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code with help from fellow mathematicians.'
    },
    {
        image: '/images/Carteles _Interstellar_.jpg',
        title: 'Interstellar',
        genre: 'Adventure, Drama, Sci-Fi',
        plot: `A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.`
    },
    {
        image: '/images/Requiem for a Dream (2000) - IMDb.jpg',
        title: 'Requiem for a Dream',
        genre: 'Drama',
        plot: `The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.`
    },
    {
        image: '/images/Nightcrawler.jpg',
        title: 'Nightcrawler',
        genre: 'Crime, Drama, Thriller',
        plot: 'When Louis Bloom, a con man desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant to become the star of his own story.',
    },
    {
        image: '/images/The Hateful Eight.jpg',
        title: 'The Hateful Eight',
        genre: ' Crime, Drama, Mystery',
        plot: `In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.`,
    },
    {
        image: '/images/Blade Runner 2049_ Quando il rischio diventa arte.jpg',
        title: 'Blade Runner 2049',
        genre: 'Action, Drama, Mystery',
        plot: `Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.`,
    }
]


Celebrity
    .create(celebrities)
    .then(allCelebrities => console.log(`${allCelebrities.length} celebrities created`))
    .catch(err => console.log(err))

Movie
    .create(movies)
    .then(allMovies => {
        console.log(`${allMovies.length} were created.`)
        mongoose.connection.close()
    })
    .catch(err => console.log(err))
