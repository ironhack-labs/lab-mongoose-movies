const { Router } = require("express");
const router = Router();
const {
    getMovies
} = require("../controllers/movie.controllers")


router 
 .get("/",getMovies)


 module.exports = router