const express = require('express')
const router = express.Router()

const Movie = require('../models/movie')

router.get('/', (req, res) => {
    
    Movie.find()
        .then(moviesList => res.render('movies/index', {moviesList}))
            // res.render('movies/index', {moviesList}))
     //       
        .catch(error => console.log("parece que ha habido un error", error))
    
})

router.get('/detalles/:movie_id', (req, res) => {

    const id = req.params.movie_id
    // console.log( "el id de la celebrity es", id)

    Movie.findById(id)

        .then(movieDetails => res.render('movies/show', movieDetails))
            
        .catch(err => console.log("ERRORR", err))


})

router.get('/new', (req, res) => res.render('movies/new'))

router.post('/new', (req,res)=> {

    const {title, genre, plot} = req.body

    Movie.create({title, genre, plot})
        .then(() => res.redirect('/movies'))
        .catch(error => console.log("parece que ha habido un error", error))

})

router.post("/delete/:_id", (req, res) =>{
    const id = req.params._id
        Movie.findByIdAndRemove(id)
        .then(()=> res.redirect("/movies"))
        .catch(error => console.log("parece que ha habido un error", error))
})

router.get("/edit/:_id", (req, res)=> {

    const id = req.params._id

    Movie.findById(id)
        .then(moviesDetails => res.render('movies/edit', moviesDetails))
        .catch(error => console.log("parece que ha habido un error", error))
})

router.post("/edit/:_id", (req,res)=>{

    const id = req.params._id
    const {title, genre, plot} = req.body

    Movie.findByIdAndUpdate(id, {title, genre, plot})
        .then(()=> res.redirect("/movies"))
        .catch(error => console.log("parece que ha habido un error", error))

})




module.exports = router