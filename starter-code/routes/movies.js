const router = require("../routes/index")
const movieList = require("../bin/seeds.js")
const Movie = require("../models/movie")


router.get("/movies", (req, res, next) => {
  Movie.find().then(mov => {
    console.log("=============>>>>>>>", mov)
    res.render("movies/mIndex", { mov: mov })
  })

})


module.exports = router