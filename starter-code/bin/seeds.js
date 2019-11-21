const mongoose = require('mongoose')
const Celeb = require('../models/Celebrity')

const celebrities = [
  {
    name: "Arnold Schwarznegger",
    occupation: "Actor",
    catchPhrase: "Sayonara, baby",
  },
  {
    name: "Luis Miguel",
    occupation: "Singer",
    catchPhrase: "Ahora te puedes marchar",
  },
  {
    name: "Seth Rogen",
    occupation: "Comedian",
    catchPhrase: "Roll a joint",
  }
]

mongoose
  .connect('mongodb://localhost/celebrities', { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    Celeb.create(celebrities)
    mongoose.connection.close(x=>console.log(x))
  }).catch(err => console.log(err))