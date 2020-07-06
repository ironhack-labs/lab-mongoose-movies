const mongoose = require('mongoose')
const Celebrities = require('../models/Celebrities.model.js')
const Movies = require('../models/Movie.model.js')

mongoose
  .connect('mongodb://localhost/celebrityDb', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err))



const celebs = [
    { name : 'Robert Downey Jr.',
      occupation : 'Actor',
      catchPhrase : 'La profesión de actor es como una montaña rusa. Cuando te encuentras arriba, no hay que dejar de pensar que enseguida se vuelve a bajar y otra vez a subir.',
      moviesOf: 'Dolittle'
    },
    { name : 'Lucy Hale',
      occupation : 'Actress',
      catchPhrase : 'When it comes to life and love, why do we believe our worst reviews?',
      moviesOf : 'Fantasy Island'
    },
    { name : 'Aldis Hodge',
      occupation : 'Actress and singer',
      catchPhrase : `Play before you get good, because by the time you get good, you're too old to play.`,
      moviesOf : 'Invisible man'
    }
]

Celebrities.deleteMany({})
.then(() => Celebrities.create(celebs))
.then(celebEl => console.log(`You've created ${celebEl.length} celebrities`))
.then(() => mongoose.connection.close())
.catch(err => console.log('error', err))


const movies = [
    { title : 'Invisible man',
      genre : 'Horror',
      plot : `One of the rare psychological horror-thrillers that should come with a trigger warning, ‘The Invisible Man’ subverts many genre tropes to keep you looking over your shoulder well after the credits roll.`
    },
    { title : 'Fantasy Island',
      genre : 'Adventure, Comedy',
      plot : `The concept of a modern-day genie in a posh resort sounds more than appealing in theory, but in reality, that initial curiosity fizzles out soon after and is swiftly replaced by perplexity.`
    },
    { title : 'Dolittle', 
      genre : 'Comedy',
      plot : `Technicalities and screenplay aside, the tonality is fun and bubbly, and as far as a family film goes, ‘Dolittle’ is sure to be a hit with kids, who seem to be the film's target audience.`
    }
]

Movies.deleteMany({})
.then(() => Movies.create(movies))
.then(movieEl => console.log(`You've created ${movieEl.length} Movies`))
.then(() => mongoose.connection.close())
.catch(err => console.log('error', err))