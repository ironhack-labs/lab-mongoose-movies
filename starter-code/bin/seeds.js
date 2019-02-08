const mongoose = require('mongoose')
const Celebrity =  require('../models/Celebrity')

const celebrities = [
  {
    name : "Nicki Minaj",
    occupation: "singer",
    catchPhrase: "Shoutout to my haters, sorry that you couldn’t phase me",
  },
  {
    name : "Cristiano Ronaldo",
    occupation: "soccer player",
    catchPhrase: "I'm the best",
  },
  {
    name : "Ariana Grande",
    occupation: "singer",
    catchPhrase: "Japanese BBQ",
  },
  {
    name : "Steven Spielberg",
    occupation: "filmmaker",
    catchPhrase: "Groarr!",
  },
];

mongoose.connect('mongodb://localhost/lab-mongoose-movies',()=>{
    Celebrity.create(celebrities)
    .then(celebrities => {console.log(`Created ${celebrities.length}  celebrities`)
      mongoose.connection.close()
    })
})

