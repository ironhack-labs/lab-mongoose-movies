const express = require('express');
const Movie = require('../models/Movie.model.js')

const router = express.Router();

//OBTENER LAS PELICULAS #8
router.get('/movies', (req, res, next) => {

    Movie.find()
        .then((allPelis) => {
            console.log(allPelis)
            res.render("movies/index", { allPelis })
        }).catch(error => {
            console.log("Error de carga!!")
            next(error)
        })

});
// AÑADIR PELIS #10
router.get('/movies/new', (req, res, next) => {
    res.render('movies/new')
});

router.post('/movies/new', (req, res, next) => {
    const { title, genre, plot } = req.body

    Movie.create({
            title,
            genre,
            plot
        })
        .then((moviesCreate) => {

            res.redirect('/movies')
        })
        .catch(error => {
            res.render('movies/new')
        })
});






//Detalles de la película #9

router.get('/movies/:id', (req, res, next) => {

    const { id } = req.params

    Movie.findById(id)
        .then((detalle) => {
            res.render('movies/show', { movies: detalle })
        })
        .catch(error => next(error))
});


//Borrar la pelicula # 11

//Iteration #11: Deleting Movies
router.post("/movies/delete/:id", (req, res, next) => {
    const id = req.params.id //EL BORRAR ME FUNCIONABA, QUISE INTENTARLO CON LA DESTRUCTURACION const {id} = req.params pero ya no le moví

    Movie.findByIdAndDelete(id)
        .then(() => {
            res.redirect("/movies")
        })
        .catch((error) => {
            next(error)
        })
})


//RUTA PARA EDITAR # 12

router.get('/movies/edit/:id', (req, res, next) => {
    const { id } = req.params
    Movie.findById(id)
        .then((toFind) => {
            res.render('movies/edit', {
                movies: toFind
            })
        })
        .catch(error => next(error))
})



router.post("/movies/edit/:id", (req, res, next) => {
    const { id } = req.params

    const { title, genre, plot } = req.body
    Celebrity.findByIdAndUpdate(id, { title, genre, plot }, { new: true })
        .then((updated) => {
            console.log(updated)
            res.redirect('/movies')
        }).catch((error) => {
            next(error)
        })

})

//RUTA PARA OBTENER INFORMACIÓN COMPLETA DE LA PELICULA
router.get('/movies/detail/:id', (req, res, next) => {
    console.log(req.params)
    const id = req.params.id
    Movie.findById(id)
        .then((found) => {
            console.log(found)
            res.render('movies/show', { found })
        }).catch((error) => { console.log(error) })
})

module.exports = router;