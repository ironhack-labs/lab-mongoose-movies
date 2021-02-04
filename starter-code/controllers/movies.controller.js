//require model
const Movie = require("../models/Movie.model")

//Show celebrities
module.exports.list = (req,res,next) =>{
    Movie.find(
        req.query.title ? {title: { $regex: req.query.title, $options: "i" }} : {}
    )
        .then(data => {
            res.render('movies/list_movies', {
                movies: data, 
                movie_search: req.query.title
            })
        })
        .catch (e => next(e))
}
