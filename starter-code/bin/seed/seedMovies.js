require("dotenv").config();
require("../../app"); 
const Movie = require("../../models/movie"); 

const movies = [
  {
    title: "boom",
    genre: "action",
    plot: "fighting"
},
{
    title: "whoosh",
    genre: "space",
    plot: "the moon"
},
{
    title: "clang",
    genre: "drama",
    plot: "cooking show"
},

];

function createMovie(data) {
    Movie.insertMany(data)
    .then((movies)=>{movies.forEach(movie => console.log(movie.title))
    })
    .catch(err => console.log(err))
}


function deleteAllMovies() {
Movie.deleteMany().then(()=> console.log("succesfully deleted"))
.catch(err => console.log(err))
}

function deleteOneMovie(name, val) {
Movie.deleteOne({name: val}).then(()=> console.log("succesfully delete", val))
.catch(err => console.log(err))
}

createMovie(movies)




