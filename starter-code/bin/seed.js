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
        photo: "https://es.web.img2.acsta.net/medias/nmedia/18/82/63/71/20528550.jpg",
        catchPhrase: `I've seen and swam and climbed and lived and driven and filmed.Should it all end tomorrow, I can definitely say there would be no regrets.I am very lucky, and I know it.I really have lived 5, 000 times over.`
},
    {
        name: 'Christopher Nolan',
        occupation: 'Director',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Christopher_Nolan_Cannes_2018.jpg',
        catchPhrase: `I think there's a vague sense out there that movies are becoming more and more unreal. I know I've felt it.`
    },
    {
        name: 'Colleen Hoover',
        occupation: 'Writer',
        catchPhrase: `Don't take life too seriously.Punch it in the face when it needs a good hit.Laugh at it.`,
        photo: 'https://skoob.s3.amazonaws.com/autores/9122/9122SK1563238108G.jpg'
    }
]

const moviesConst = [{
    title: 'The imitation game',
    genre: 'Biography, Drama, War',
    photo: 'https://es.web.img3.acsta.net/pictures/14/12/30/13/20/432349.jpg',
    plot: 'During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code with help from fellow mathematicians.'
},
    {
    title: 'Interstellar',
    genre: 'Adventure, drama, Thriller',
    photo: 'https://es.web.img3.acsta.net/pictures/14/10/02/11/07/341344.jpg',
    plot: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.'
    }
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