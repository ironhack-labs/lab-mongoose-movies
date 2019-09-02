const mongoose = require ("mongoose");
const moviesModel = require ("./../models/movies");
const CelebrityModel= require("./../models/celebrity")

mongoose.connect("mongodb://localhost/starter-code") 
// {useNewUrlParser: true}).then(()=> {
//   console.log("connect to mongodb")
//   .catch((err)=> {
//     console.log(err);
//   });
// });


const celebrities = [
  {name: "Tom Cruise", occupation: "actor", catchPhrase: "Scientology is great !"},
  {name: "Beyonce", occupation: "singer", catchPhrase:"crazy in love !"},
  {name: "Britney Spears", occupation: "singer", catchPhrase:"oops I did it again !"}
];

const movies = [
  {title: "The lord of the ring", genre: "Fantasy", plot: "An evil ring has to be destroyed"},
  {title: "Rogue One", genre: "Science fiction", plot:"They have to steal plans to save the world"},
  {title: "Gladiator", genre: "Drama", plot:"His family have been killed and he wants revenge"}
];

CelebrityModel.insertMany(celebrities).then(dbRes=> {
  console.log(dbRes);
})
.catch(dbErr => {
  console.log(dbErr)
})

// moviesModel.insertMany(movies).then(dbRes=> {
//   console.log(dbRes);
// })
// .catch(dbErr => {
//   console.log(dbErr)
// })