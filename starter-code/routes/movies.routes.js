const express = require('express');
const router = express.Router();

const Movie = require("../models/movie.model")


router.get("/", (req, res, next) => {
    Movie.find({})
        .then(movies => {
            res.render("movies", {
                movies
            });
        })
        .catch(err => console.log("hay un error en el listado de movies", err))
});

//Formulario de crear una nueva película
router.get('/new', (req, res) => res.render('movies/new'))

//Sacar con la id el detalle de una película
router.get('/:id', (req, res, next) => {

    const movieId = req.params.id

    Movie.findById(movieId)
        .then(movie => {
            res.render('movies/show', {
                movie
            })
        })
        .catch(err => {
            console.log("Error consultando la película en la BBDD: ", err)
            next(err)
        })
});

//Crear nueva película
router.post('/', (req, res) => {

    const {
        title,
        genre,
        plot,
    } = req.body

    Movie.create({
            title,
            genre,
            plot,
        })
        .then(() => res.redirect('/movies'))
        .catch(err => {
            console.log("Hubo un fallo añadiendo newMovie", err)
        })
    res.redirect("/movies")
});

router.post("/:id/delete", (req, res, next) => {

    const removeId = req.params.id

    //Borrar una película
    Movie.findByIdAndRemove(removeId)
        .then(() => res.redirect("/movies"))
        .catch(err => {
            console.log("Hubo un error borrando la película en la BBDD: ", err)
            next(err)
        })
})


module.exports = router;