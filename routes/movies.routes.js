const express = require('express')
const router = express.Router()

const Movie = require('./../models/movie.model')


// Iteración 8 - list
router.get('/', (req, res)=> {
    Movie
        .find()
        .then(moviesArr => res.render('movies.views/index', {moviesArr}))
        .catch(error => console.log('el error es: ', error))
    }  
)

// Iteración 10 - add

router.get('/create', (req, res)=> res.render('movies.views/createMovie'))

router.post('/create', (req, res) => {

    const {title, genre, plot} = req.body
    console.log('los req.body son: ',req.body)

    Movie
        .create({title, genre, plot})
        .then(()=> res.redirect('/movies'))
        .catch(error => console.log('el error es: ', error))

})

// BONUS Iteración 12 - editing

router.get('/:id/edit', (req, res) =>{

    Movie
        .findById(req.params.id)
        .then(movie => res.render('movies.views/edit', movie))
        .catch(error => console.log('el error es: ', error))
})


router.post('/:id', (req, res)=>{

    const {title, genre, plot} = req.body

    Movie
        .findByIdAndUpdate(req.params.id, {title, genre, plot})
        .then(()=> res.redirect(`/movies/${req.params.id}`))
        .catch(error => console.log('el error es: ', error))
})

// Iteración 11 - remove

router.post('/:id/remove', (req,res) =>{

    Movie
        .findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/movies'))
        .catch(error => console.log('el error es: ', error))

})


// Iteración 9 - details

router.get('/:movieID', (req, res)=>{

    Movie
        .findById(req.params.movieID)
        .then(movie => res.render('movies.views/details', movie))
        .catch(error => console.log('el error es: ', error))
    }
)




module.exports = router


