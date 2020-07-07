const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/movies', (req, res, next) => {
    Movie.find({})
        .then((moviesFromDB) => {
            res.render('movies/index', { mov: moviesFromDB })
        })
        .catch((error) => next(error))
})

/* GET movies Detail */
router.get('/movies/:id/details', (req, res, next) => {
    const id = req.params.id
    // res.render('celebrities/details')
    console.log(id)
    Movie.findOne({ id: id })
        .then((movie) => {
            console.log(movie)
            res.render('movies/details', { mov: movie })
        })
        .catch((error) => next(error)) // Pasar error a la siguiente peticion 
})

/* GET New Celebrity 
router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new')
})

/* POST New Celebrity 

router.post('/celebrities/new', (req, res, next) => {

    const body = req.body
    Celebrity.create(body)
        .then(() => {
            res.redirect('/celebrities')
        })
        .catch(error => console.log(error))
})

/* GET Delete Celebrity 

router.get('/celebrities/:id/delete', (req, res, next) => {
    const id = req.params.id
    Celebrity.deleteOne({ id: id })
        .then(() => {
            res.redirect('/celebrities')
        })
        .catch(error => console.log(error))
})

/* GET Editing Celebrity 

router.get('/celebrities/:id/edit', (req, res, next) => {
    const id = req.params.id
    console.log(id)

    Celebrity.find({ id: id })
        .then((celebrityDB) => {
            res.render('celebrities/edit', { cel: celebrityDB })
        })
        .catch(error => console.log(error))
})

router.post('/celebrities/:id/edit', (req, res, next) => {
    const id = req.params.id
    const body = req.body

    Celebrity.findOneAndUpdate({ id: id }, body)
        .then((celebrityDB) => res.redirect('/celebrities'))
        .catch(error => console.log(error))
})
*/
module.exports = router;