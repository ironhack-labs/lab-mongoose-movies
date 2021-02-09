const mongoose = require('mongoose')

const Celebrity = require('../models/celebrity.js')

const Movies = require('../models/movie.model.js')

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

// const data = [
//     {
//       name: "Tom Cruise",
//       occupation: "actor",
//       catchPhrase: "Show Me the Money!",
//     },
//     {
//       name: "Justin Beiber",
//       occupation: "singer",
//       catchPhrase:
//         "“If i can do just one tenth of the good Michael Jackson did for others, I can really make a difference in this world.",
//     },
//     {
//       name: "Jim Carrey",
//       occupation: "comedian",
//       catchPhrase:
//         "One thing I hope I'll never be is drunk with my own power. And anybody who says I am will never work in this town again",
//     }
//   ];

//   Celebrity.create(data).then(celebDB => {
//       console.log(celebDB.length)
//       mongoose.connection.close()

//   }).catch((error)=>{
//         console.log(error)
//   })

const data = [
    {title:"Mission Impossible 4",
    genre:"action",
    plot:"he wins"
    },
    {title:"Bruce Allmighty",
    genre:"comedy",
    plot:"he becomes God"
    },
    {title:"Oblivion",
    genre:"action",
    plot:"he defends the world"
    },
    {title:"The Big Fish",
    genre:"drama",
    plot:"A man wants to know his past"
    },
    {title:"The Goonies",
    genre:"adventures",
    plot:"a bunch of kids encounter one-eyed Willy"
    },
]
Movies.create(data).then(movieDB => {
           console.log(movieDB.length)
           mongoose.connection.close()
    
       }).catch((error)=>{
             console.log(error)})