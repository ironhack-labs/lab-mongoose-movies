const express = require("express");
const router = express.Router();

const Movie = require("../models/movie.model");

// Endpoints
router.get("/listado", (req, res) => {
    Movie
        .find()
        .then(allMovies => res.render("movies/movie", { allMovies }))
        .catch((err) => console.log("Error en la BBDD", err));
});

router.get("/detalle/:Id", (req, res) => {
    Movie
        .findById(req.params.Id)
        .then(theMovie => res.render("movies/showMovie", theMovie))
        .catch((err) => console.log("Error en la BBDD", err));
});

router.get('/crear', (req, res) => {
    res.render('movies/newMovie')
})

router.post('/crear', (req, res) => {

    const { title, genre, plot } = req.body

    Movie
        .create({ title, genre, plot })
        .then(() => res.redirect('/peliculas/listado'))
        .catch(err => console.log("Error en la BBDD", err))
})

router.post('/:Id/eliminar', (req, res) => {
    Movie
        .findByIdAndRemove(req.params.Id)
        .then(() => res.redirect('/peliculas/listado'))
        .catch(err => console.log("Error en la BBDD", err))

})

router.get('/:Id/editar', (req, res) => {

    Movie
        .findById(req.params.Id)
        .then(theMovie => res.render('movies/editMovie', theMovie))
        .catch(err => console.log("Error en la BBDD", err))
})


router.post('/editar/:Id', (req, res) => {

    const { title, genre, plot} = req.body

    Movie
        .findByIdAndUpdate(req.params.Id, { title, genre, plot }, { new: true })
        .then(() => res.redirect('/peliculas/listado'))
        .catch(err => console.log("Error en la BBDD", err))
})


module.exports = router;