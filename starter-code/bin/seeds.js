require('dotenv').config();

const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')

mongoose.connect(process.env.DB)

const celebrities = [
    {
        name: 'Ryan Gosling',
        occupation: 'Actor',
        catchPhrase : 'I have learned it is important not to limit yourself.',
    },
    {
        name: 'Emma Watson',
        ocuppation: 'Actress',
        catchPhrase: 'Both men and women should feel free to be sensitive.',
    },
    {
        name: 'Ellen Pompeo',
        ocuppation: 'Actress',
        catchPhrase: 'Not everybody has to be happy all the time. That is not mental health. That is crap.',
    }
]

Celebrity.create(celebrities)
.then(celebrities => {
    console.log(`Good job! You have created ${celebrities.length} new celebrities.`)
    mongoose.connection.close()
})
.catch(err => console.log(err))

const movies = [
    {
        title: 'La La Land',
        genre: 'Drama',
        plot : 'Sebastian, a jazz pianist, and Mia, an aspiring actress, fall madly in love; but the excessive ambition they have to succeed in their respective careers, in a city like Los Angeles, full of competition and lacking in piety, endangers their love.',
    },
    {
        title: 'Beauty and the Beast',
        genre: 'Drama',
        plot: 'Belle, a beautiful and bright young woman, assumes the place of her father as a prisoner in the castle of a beast. Little by little, the brave Belle will come to realize that the beast prince is not the evil being that everyone believes he is and has, in reality, a big heart.',
    },
    {
        title: 'Catch me if you can',
        genre: 'Dramatic comedy',
        plot: 'A teenage swindler successfully passes for an airline pilot, a surgeon and a lawyer.'
    }
]

Movie.create(movies)
.then(movies => {
    console.log(`Good job! You have created ${movies.length} new movies.`)
    mongoose.connection.close()
})
.catch(err => console.log(err))