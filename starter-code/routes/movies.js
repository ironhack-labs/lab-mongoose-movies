const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie")
const {
    listMovies
} = require('../controllers/movies')


router.get("/movies", listMovies)

// router.get("movies/:movieID", movieDetails)

// //ITERACION 4
// router.get("/movies/new", (req, res) => res.render( /*aca teneos que regresar el form para crear una ceebridad?*/ ))



// router.post("/movies", createMovie)

// //ITERACION 5
// router.post("/movies/:delete", async(req, res, next) => {

// })


module.exports = router

//GRACIAS DANI =)