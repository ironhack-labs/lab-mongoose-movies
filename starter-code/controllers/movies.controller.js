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


module.exports.show = (req,res,next) =>{
    Movie.findById(req.params.id)
        .then(data => {
            res.render('movies/movie_detail', { ...data.toJSON(), delete: false })
        })
        .catch(e => next(e))
}
