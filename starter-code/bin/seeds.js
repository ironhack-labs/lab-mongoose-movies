// const mongoose = require("mongoose")
// const Celebrity = require("../models/celebrity")

// const celebrities = [{
//     name:"Tiger Woods",
//     occupation:"Sportsman",
//     catchPhrase:"Just do it"
// },
// {
//     name:"Rory McIlroy",
//     occupation:"Sportsman",
//     catchPhrase:"I'm the Best"
// },
// {
//     name:"Benoit XVI",
//     occupation:"Former Pope",
//     catchPhrase:"Sortez couverts"
// }]

// mongoose
//   .connect("mongodb://localhost:27017/Celebrities")
//   .then((self) => {
//     console.log(`Connected to ${self.connection.name}`);

//     // Seeds
//     Celebrity.create(celebrities)
//       .then((celebrities) => {
//         celebrities.forEach((celebrity) => {
//           console.log(celebrity.name);
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(`Error occured while connecting to the Database ${err}`);
//   });

const mongoose = require("mongoose")
const Movie = require("../models/movie")

const movies = [{
        title: "Star Wars",
        genre: "Fantastique",
        plot: "Les Jedis contre le côté obscur de la force "
    },
    {
        title: "La cité de la peur",
        genre: "Humour",
        plot: "Attention chérie ca va couper!"
    },
    {
        title: "GRRRRrrrrhhhh",
        genre: "undefined ;)",
        plot: "Une belle partie de biche - volley"
    }
]

mongoose.connect("mongodb://localhost:27017/Movies").then((self) => {
    console.log(`Connected to ${self.connection.name}`);
    Movie.create(movies).then((movies) => {
        movies.forEach((movie) => {
            console.log(movie.name)
        })
    }).catch((err) => {
        console.log(err)
    })
}).catch((err) => {
    console.log(err)
})