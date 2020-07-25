const mongoose = require('mongoose');
const Celebrity = require('../model/Celebrity');
const Movie = require('../model/Movie');

const dbtitle = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true, useUnifiedTopology: true });
Celebrity.collection.drop();
Movie.collection.drop();

const celebrities = [
    {
        name: 'Beyoncé',
        occupation: 'Singer',
        catchPhrase: `If you know me, you know my family is the biggest priority in my life. My family is my sanctuary, my weakness, and my strength. They're my tribe, and it was important that we all felt like family`
    },
    {
        name: 'Zendaya',
        occupation: 'Actress',
        catchPhrase: `I will not sucumb to your peer pressure lol`
    },
    {
        name: 'Justin Timberlake',
        occupation: 'Singer',
        catchPhrase: `Bringin' sexy back`
    },
    {
        name: 'Donald Trump',
        occupation: 'President of EE.UU.',
        catchPhrase: `You're fired!`
    }
]

const movies = [
    {
        title: 'The Greatest Show',
        genre: 'Musical',
        plot: `In a series of whimsical and colorful musical numbers, Greatest Showman brings the menagerie of P.T. Barnum's traveling three-ring circus to life on the big screen. The musical biopic was inspired by the imagination and innovation of Phineas Taylor Barnum, who "helped invent show business," according to Hugh Jackman.`
    },
    {
        title: 'Bohemian Rhapsody',
        genre: 'Biopic',
        plot: `The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).`
    },
    {
        title: 'In Time',
        genre: 'Science-Fiction',
        plot: `In Time is a 2011 American science fiction action film written, directed and produced by Andrew Niccol. Amanda Seyfried and Justin Timberlake star as inhabitants in a society where people stop aging at 25. Instead of using paper money, a new economic system uses time as currency, and each person has a clock on their arm that counts down how long they have to live. Cillian Murphy, Vincent Kartheiser, Olivia Wilde, Matt Bomer, Johnny Galecki, Collins Pennie and Alex Pettyfer also star. The film was released on October 28, 2011.`
    }
]

celebrities.map(celebrity => {
    const newCelebirty = new Celebrity(celebrity);
    return newCelebirty.save()
        .then((celebrity) => {
            console.log(`${celebrity.name} saved in DB`);
        })
        .catch(error => {
            throw new Error(`Impossible to add the author. ${error}`);
        })
})

movies.map(movie => {
    const newMovie = new Movie(movie);
    return newMovie.save()
        .then((movie) => {
            console.log(`${movie.title} saved in DB`);
        })
        .catch(error => {
            throw new Error(`Impossible to add the movie. ${error}`);
        })
})
