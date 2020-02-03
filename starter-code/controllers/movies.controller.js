const Movie = require('../models/Movie')

exports.moviesList = async (req,res,next) => {
    const listMovies = await Movie.find()
        .catch(err => console.log(err))
    res.render('movies/movies', {listMovies})
}

exports.moviesShow = async (req,res,next) => {
    const movie = await Movie.findById(req.params.id).catch(err=>console.log(err))
    res.render('movies/moviesShow', {movie})
}

exports.movieAddGet = async (req, res, next) => {
    res.render('movies/newMovie')
}

exports.movieAddPost = async (req,res,next) => {
    const {title, genre, plot} = req.body
    const newMovie = {title, genre, plot} 

    await Movie.create( newMovie )
        .then( res.redirect('/movies'))
        .catch( err => console.log(err) )
}

exports.movieDelete = async (req,res,next) => {
    await Movie.findByIdAndDelete( req.params.id )
        .catch(err => console.log(err))
    res.redirect('/movies')
}

exports.movieEditGet = async (req,res,post) => {
    const movie = await Movie.findById(req.params.id)
        .catch(err => console.log(err))
    res.render('movies/moviesEdit', {movie})
}

exports.movieEditPost = async (req,res,next) => {
    const id = req.params.id
    const {title, genre, plot} = req.body
    const newValues = {title, genre, plot}
    await Movie.findByIdAndUpdate(id, newValues)
        .catch(err => console.log(err))
    res.redirect('/movies')

}