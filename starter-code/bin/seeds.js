require('dotenv').config();

const celebrities = [{
  name: "Robert Downey Jr",
  occupation: "Iron Man",
  catchPhrase: "I am Iron Man"
},
{
  name: "Chris Evans",
  occupation: "Retired",
  catchPhrase: "Avengers... Assemble"
},
{
  name: "Mark Ruffalo",
  occupation: "Hulk-ing",
  catchPhrase: "Hulk SMASH!"
}
]


const movies = [{
  title: "Avengers",
  genre: "Action",
  plot: "4 Avengers vs Army"
},
{
  title: "Avengers: Infinity War",
  genre: "Action",
  plot: "Avengers asks themselves if they can win"

},
{
  title: "Avengers: EndGame",
  genre: "Action",
  plot: "All Avengers vs Giant Army"
}
]


const mongoose=require("mongoose");

const Celeb = require("../model/Celeb")
const Movie = require("../model/Movie")

mongoose.connect
(process.env.DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
.then(()=>{
  console.log("conectando....")
})

async function addCelebs(){
  const celebs = await Celeb.insertMany(celebrities);
  celebs.forEach(ele=>{
    console.log(`agregando ${ele.name}`)
  })
}

addCelebs()

async function addMovies(){
  const pelis=await Movie.insertMany(movies)
  pelis.forEach(ele=>{
    console.log(`agregando ${ele.title}`)
  })
}

addMovies();