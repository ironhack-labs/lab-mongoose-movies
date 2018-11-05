const mongoose = require("mongoose");
const Celeberty = require("../models/celeberty")
const Movies = require("../models/movies")
const CelebertyMovie = require("../models/celebertyMovie")
const dbName = "movies";
mongoose.connect(`mongodb://localhost/${dbName}`)


// const celeberty = [
//   { name: "Donald Duck",
//     occupation: "Nephew of a rich guy",
//     catchPhrase: "Quack"
//   },
//   { name: "Pikachu",
//     occupation: "Fighter",
//     catchPhrase: "Pickachuuuu"
//   },
//   { name: "Santa Claus",
//     occupation: "Making dreams come true",
//     catchPhrase: "Hohoho"
//   }
// ]

// const movies = [
//   { title: "The Donald Duck Chronicles",
//     genre: "Drama",
//     plot: "Chronicles of Donald's life"
//   },
//   { title: "Santa Claus 365",
//     genre: "Christmas",
//     plot: "Santa is here. Every day."
//   },
//   { title: "Pickachu's small world",
//     genre: "Experimanetal",
//     plot: "Pickachu is sad."
//   },
 
// ]

// Movies.find()
// .then 
//   (movies => {Celeberty.find()
//     .then (celeberty => {
//       movies.forEach(el => {
//         CelebertyMovie.create({
//           _movieId : el._id,
//           _celebertyId : el._id
//       })
//       })
     
//   })
//   })




// Movies.create(movies)
// .then((res) => {
//   console.log("Movies have been imported", res)
// mongoose.connection.close()
// })
// .catch((err)=> {
//   console.log("An error happened during import", err)
// })
CelebertyMovie.create({})


