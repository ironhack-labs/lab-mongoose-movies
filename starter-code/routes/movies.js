const express = require('express')
const router  = express.Router()

const Movie = require("../models/movie")

/* GET movies page */
 router.get("/movies", (req,res) =>{
     Movie.find()
        .then((movieArray) => {
            console.log(movieArray)
            res.render("movies/index", { movies:movieArray }) 
            
        }).catch((error) => {
            console.log(error)
        });
    })

    module.exports = router;