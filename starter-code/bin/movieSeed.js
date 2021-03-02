require("dotenv").config();
require("./../config/mongo"); 
const celebModel = require("./../models/celebrity");
const movieModel = require("./../models/movies");


const celebrities = [
    {
        title: "Freddy 50",
        genre: "Horror",
        plot: "A scary movie",
        cast: ["603e58f8912f4111f68ebca0"]    
    },
]

movieModel.insertMany(celebrities)
    .then(celeb => console.log(celeb))
    .catch(err => console.log(error))