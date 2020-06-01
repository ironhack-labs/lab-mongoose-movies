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
    //POST delete movie
    router.post("/movies/:id/delete", (req, res) => {
        Movie.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect("/movies")
        }).catch((error) => {
            console.log(error)
        });
    })
// GET to a new movie page
 router.get("/movies/new", (req, res) => {
    res.render("movies/new")
})
//POST new movie page
 router.post("/movies/new", (req, res) => {
     const {
         title,
         genre,
         plot
     } = req.body
     const newMovie = new Movie ({
        title,
        genre,
        plot
     })
     newMovie.save()
     .then(() => {
         res.redirect("/movies")
     }).catch((error) => {
         console.log(error)
     });
 })

/* GET to an specific movie page */
router.get('/movies/:id', (req, res) => {
    Movie.findById(req.params.id)
    .then((result) => {
        console.log(result)
        res.render("movies/show", {movies:result})
    })
    .catch((error) => {
        console.log(error)
    });
})  

    module.exports = router;