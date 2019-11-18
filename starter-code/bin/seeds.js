require("dotenv").config();
const mongoose    = require('mongoose');
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

// const celebrityList = [
//   {
//     name:"A",
//     occupation:"Actor",
//     catchPhrase:"A"
//   },
//   {
//     name:"B",
//     occupation:"Actress",
//     catchPhrase:"B"
//   },
//   {
//     name:"C",
//     occupation:"Model",
//     catchPhrase:"C"   
//   }
// ];
// mongoose.
// connect(process.env.DB, {useUnifiedTopology:true, useNewUrlParser:true})
// .then(async () => {
//   const celebrities = await Celebrity.create(celebrityList);
//   console.log(`${celebrities.length} celebrities created`);
//   mongoose.connection.close();
// })
// .catch(err => console.log(err))


const movieList = [
  {
    title:"A",
    genre:"Action",
    plot:"A"
  },
  {
    title:"B",
    genre:"B movie",
    plot:"B"
  },
  {
    title:"C",
    genre:"Comedy",
    plot:"C" 
  }
];

mongoose.
connect(process.env.DB, {useUnifiedTopology:true, useNewUrlParser:true})
.then(async () => {
  const movies = await Movie.create(movieList);
  console.log(`${movies.length} movies created`);
  mongoose.connection.close();
})
.catch(err => console.log(err))

