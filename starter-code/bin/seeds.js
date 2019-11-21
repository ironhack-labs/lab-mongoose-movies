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
  .connect(process.env.DB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(async () => {
    const celebis = await Celeb.create(celebrities);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));