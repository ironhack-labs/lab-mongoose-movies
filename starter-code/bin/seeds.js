const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity.model.js')
const Movie = require('../models/Movie.model.js')

const DB_NAME = 'hollywoodDataBase'

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const celebrities = [
    {
        name: 'Maynard James Keenan',
        occupation: 'Musician',
        catchPhrase: 'People have to follow their hearts, and if their hearts lead them to Wal-Mart, so be it.'
    },
    {
        name: 'Steven Wilson',
        occupation: 'Musician',
        catchPhrase: 'Ive always been the sort of person who likes to look forward and live in the present.'
    },
    {
        name: 'Peter Jackson',
        occupation: 'Director',
        catchPhrase: 'Defeat is always momentary'
    }
]

const movies = [
    {
        title: 'The Lord of the Rings',
        genre: 'High Fantasy',
        plot: 'Frodo Bolsón es un hobbit al que su tío Bilbo hace portador del poderoso Anillo Único, capaz de otorgar un poder ilimitado al que la posea, con la finalidad de destruirlo. Sin embargo, fuerzas malignas muy poderosas quieren arrebatárselo.'
    },
    {
        title: 'Fight Club',
        genre: 'Drama',
        plot: 'A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (Helena Bonham Carter), another fake attendee of support groups, his life seems to become a little more bearable. However when he associates himself with Tyler (Brad Pitt) he is dragged into an underground fight club and soap making scheme.'
    },
    {
        title: 'Back to the Future',
        genre: 'Science Fiction',
        plot: 'A time machine transports a teenager to the 1950s, when his parents were still in high school.'
    }
]

Celebrity.create(celebrities)
    .then(celebritiesDataBase => {
        console.log(`${celebritiesDataBase.length} celebrities have been added in the data base.`)
        mongoose.connection.close()
    })
    .catch(error => console.log(`An error occurred while creating the celebrities for the data base ${error} `))

Movie.create(movies)
    .then(moviesDataBase => {
        console.log(`${moviesDataBase.length} movies have been added in the data base.`)
        mongoose.connection.close()
    })
    .catch(error => console.log(`An error occurred while creating the movies for the data base ${error}`))