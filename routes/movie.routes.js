const express = require('express')
const router = express.Router()
const path = require('path')
const Celebrity = require('../models/Celebrity.model')

const Movie = require('../models/Movie.model')

// Endpoints
/***************DUDA: SOLO FUNCIONA CUANDO LO MONTO CON PATH, PERO EN TEORÍA PATH NO ESTÁ UNIENDO NADA */
router.get('/', (req,res) => {
    Movie.find()
         .then (movies => res.render(path.join('movies/index'), {movies}))
         .catch(err => console.log('ERROR: ', err))

})

router.get('/new', (req, res) => res.render('movies/new'))

router.post('/', (req, res) => {
    const {title, genre, plot} = req.body    
    Movie.create({title, genre, plot})
         .then(movieCreated => res.redirect('/movies'))
         .catch(err => console.log('ERROR:', err))

})

router.post('/delete/:id', (req, res) => {
 
    Movie.findByIdAndRemove(req.params.id)
        .then(del => res.redirect('/movies'))
        .catch(err => console.log('ERROR:', err))

})

router.get('/edit/:id', (req, res) => {
    Movie.findById(req.params.id)
         .then( movieToEdit => res.render('movies/edit', movieToEdit))
         .catch(err => console.log('ERROR:', err))
})

router.get('/:id', (req,res) => {
    Movie.findById(req.params.id)
       .then( movie => res.render('movies/show', movie))
       .catch( err => console.log('ERROR: ', err)) 
})

router.post('/:id', (req,res) =>{
    const {_id, title, genre, plot} = req.body
    Movie.findByIdAndUpdate(_id, {title, genre, plot})
        .then(() => res.redirect('/movies'))
        .catch(err => console.log('ERROR:', err))
})


module.exports = router