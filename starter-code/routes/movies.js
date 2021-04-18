const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

router.get('/', (req, res, next) => {
    Movie.find({})
    .then(movies => {
        console.log(movies)
        res.render('movies/index', {movies}) //{resultado del fin}
    })
    .catch((err) => {
        next('error')
        console.error(err);
    })
})
router.get('/new', (req, res, next) =>{
    res.render('movies/new')
})
router.post('/new', (req, res) =>{
    const {title, genre, plot} = req.body; //getting value from name form, occupation form
    
    Movie.create({title, genre, plot})//name param model : form value name
    .then(()=>{
        console.log('-------------')

        res.redirect("/movies")
    })
    .catch(error =>{
        res.render('movies/new', { error }) //el segundo parametro siempre debe ser un obj
    })
})

router.get('/:id/edit', (req, res, next)=>{
    Movie.findById(req.params.id)
    .then(movie => {
        res.render('movies/edit', movie)
    })
    .catch(error => {
        next('error')
        console.error(error)
    })

})

router.post('/:id/delete', (req, res, next) =>{
    Movie.findByIdAndRemove(req.params.id)
    .then(() =>{
        res.redirect('/movies')
    })
    .catch(error =>{
        next('error')
        console.error(error);
    })
})
router.post('/:id', (req, res, next) =>{
    const {title, genre, plot} = req.body;
    Movie.findByIdAndUpdate(req.params.id, {title, genre, plot})
    .then(() =>{
        res.redirect(`/movies/${req.params.id}`) //redirecciona a la ruta /celebrities/id
    })
    .catch(error => {
        next('error')
        console.error(error)
    })
})

router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id) //findbyId devuelve un objeto
    .then(movie => {
        res.render('movies/show', movie)
    })
    .catch(error => {
        next('error')
        console.error(error)
    })

})

module.exports =  router;