// const celebrityModel = require("../models/celebrity");
// const mongoose = require("mongoose");



// mongoose
//     .connect("mongodb://localhost/starter-code", {useNewParser: true})
//     .then( x => {
//         console.log(`Connected to Mongo! DB name: "${x.connections[0].name}`)
        
//         celebrityModel
//             .insertMany(celebrity)
//             .then(dbRes => {
//                 console.log("Celebrity created");
//             })
//             .catch(err => {
//                 console.log("there was an error creating the celebrity")
//             });
    
//     })
//     .catch(err => {
//         console.log("Error connecting to Mongo DB")
//     })
    

//     const celebrity = [
//       {
//         name: "Franck Tréboit",
//         occupation: "web dev",
//         catchPhrase: "I'm a papy râleur"
//       },
//       {
//         name: "Pascal Besson",
//         occupation: "web dev",
//         catchPhrase: "I'm an ecologist activist"
//       },
//       {
//         name: "Tayssir El-Younsi",
//         occupation: "web dev",
//         catchPhrase: "I'm a Tunisian celebrity"
//       }
//     ]

const movieModel = require("../models/movie");
const mongoose = require("mongoose");


mongoose
    .connect("mongodb://localhost/starter-code", {useNewParser: true})
    .then( x => {
        console.log(`Connected to Mongo! DB name: "${x.connections[0].name}`)
        
        movieModel
            .insertMany(movie)
            .then(dbRes => {
                console.log("Movie created");
            })
            .catch(err => {
                console.log("there was an error creating the movie")
            });
    
    })
    .catch(err => {
        console.log("Error connecting to Mongo DB")
    })

    const movie = [
      {
        title: "LOTR 1",
        genre: "fantasy",
        plot: "flee the Shire"
      },
      {
        title: "LOTR 2",
        genre: "fantasy",
        plot: "destroy Saruman"
      },
      {
        title: "LOTR 3",
        genre: "fantasy",
        plot: "destroy the ring"
      },
    ]