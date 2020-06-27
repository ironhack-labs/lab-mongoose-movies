const express = require('express')
const router = express.Router()

const Movie = require('./../models/movie.model')



router.get('/', (req, res)=> {
    Movie
        .find()
        .then(moviesArr => res.render('movies.views/index', {moviesArr}))
        .catch(error => console.log('el error es: ', error))
    }  
)



router.get('/:movieID', (req, res)=>{

    Movie
        .findById(req.params.movieID)
        .then(movie => res.render('movies.views/details', movie))
        .catch(error => console.log('el error es: ', error))
    }
)
module.exports = router
