// const CelebrityModel = require("./../models/Celebrity");

const movieModel = require("./../models/Movie")
const mongoose = require(`mongoose`)

// const celebrities = [
//     {
//         name : "Samuel L. Jackson",
//         occupation : "Actor",
//         catchPhrase : "I've had it with these motherfucking snakes on this motherfucking plane!"
//     },
//     {
//         name : "Jacques Chirac",
//         occupation: "President",
//         catchPhrase: "Un chef c'est fait pour cheffer!"
//     },
//     {
//         name : "Jimi Hendrix",
//         occupation: "God",
//         catchPhrase: "I'm a voodoo child!"
//     }
// ]

const movies = [
  {
    title : "Star Wars",
    genre : "Space Opera",
    plot : "piouu piiiouuuuu piouuuu"
  },
  {
    title : "Ghostbuster",
    genre : "Comedy",
    plot : "Who you gonna call?"
  },
  {
    title : "Pulp Fiction",
    genre : "Drame/Film criminel",
    plot :  "A royal cheese!"

  }
]






mongoose
  .connect('mongodb://localhost/celebritiesDB', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


movieModel
.insertMany(movies)
.then(dbSuccess   => {
        console.log("movies inserted successfully", dbSuccess);
    })
    .catch(dbErr => {
        console.log("Oh no!", dbErr)
    });
    
