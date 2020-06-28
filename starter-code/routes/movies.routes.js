const express = require('express')
const router = express.Router()




//Require Model
const Movie = require('./../models/Movie.model')

//Endpoint movies: View all collection
router.get('/', (req, res) => {
    // res.send('Here the movies colecction')

    Movie.find().sort({
            _id: -1
        })
        .then(allMovies => {
            res.render('movies/index', {
                allMovies
            })
        })
        .catch(err => console.log("Error traer listado allMovies list", err))
})


//Endpoint Show the Movie Detail
router.get('/detail/:id', (req, res) => {
    //res.send('hola soy el listado')

    Movie.findById(req.params.id)
        .then(allMovies => {
            console.log(allMovies)
            res.render('movies/show', allMovies)
        })
        .catch(err => console.log('Error en Id Movie detail', err))
})


//Endpoint Create new Celebritie
router.get('/new', (req, res) => {
    res.render('movies/new')
})


router.post('/new', (req, res) => {
    // Los datos de las peticiones de tipo POST se almacenan en req.body
    // res.send(`Eviarías a la BBDD ${req.body.name} / ${req.body.ocupation} y ${req.body.catchPharse}`)
    const {
        title,
        genre,
        plot
    } = req.body

    Movie
        .create({
            title,
            genre,
            plot
        })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log("Error en la BBDD", err))
})


//Endpoint delete celebritie
router.post('/:id/delete', (req, res) => {
    //  res.send('eleminado')
    Movie.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/movies'))

        .catch(err => console.log('Error en Id Movie detail', err))
})

//Endpoint edit Movie
router.get('/edit/:id', (req, res) => {
    // res.send('editando')
    Movie.findById(req.params.id)
        .then(theMovie => {
            res.render('movies/edit', theMovie)
        })
        .catch(err => console.log('Error en Id movie edit', err))
})

router.post('/edit/:movieId', (req, res) => {
    const {
        title,
        genre,
        plot
    } = req.body

    Movie
        .findByIdAndUpdate(req.params.movieId, {
            title,
            genre,
            plot
        }, {
            new: true
        })
        .then(() => res.redirect(`/movies/detail/${req.params.movieId}`))
        .catch(err => console.log("Error en la BBDD", err))
})






// //Endpoint delete celebritie
// router.post('/:id/delete', (req, res) => {
//     //  res.send('eleminado')
//     Celebrity.findByIdAndDelete(req.params.id)
//         .then(theCelebrity => {
//             console.log(theCelebrity)
//             res.render('/celebrities', theCelebrity)
//         })
//         .catch(err => console.log('Error en Id celebrity detail', err))
// })



// //Endpoint delete celebritie
// router.post('/:id/delete', (req, res) => {
//     //  res.send('eleminado')
//     Movie.findByIdAndDelete(req.params.id)
//         .then(theMovie => {
//             console.log(theMovie)
//             res.render('/movies', theMovie)
//         })
//         .catch(err => console.log('Error en Id Movie detail', err))
// })

module.exports = router