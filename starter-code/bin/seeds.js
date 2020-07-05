const mongoose = require('mongoose')
const Celebrities = require('../models/Celebrities.model.js')

// mongoose.connect('mongodb://localhost/celebrityDb')

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
    { name : 'Antonio Banderas', occupation : 'Actor', catchPhrase : 'La profesión de actor es como una montaña rusa. Cuando te encuentras arriba, no hay que dejar de pensar que enseguida se vuelve a bajar y otra vez a subir.'},
    { name : 'Sarah Jessica Parker', occupation : 'Actress', catchPhrase : 'When it comes to life and love, why do we believe our worst reviews?'},
    { name : 'Joey Ramone', occupation : 'singer and composer', catchPhrase : `Play before you get good, because by the time you get good, you're too old to play.`}
]

Celebrities.deleteMany({})
.then(() => Celebrities.create(celebs))
.then(celebEl => console.log(`You've created ${celebEl.length} celebrities`))
.then(() => mongoose.connection.close())
.catch(err => console.log('error', err))
