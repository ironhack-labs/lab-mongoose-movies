const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie')

router.get('/list',(req,res,next)=>{
    Movie.find()
        .then(movies=>{
            res.render('movie/getMovie',{movies})
        })
        .catch(e=>{
            next(e)
        })
})

router.get('/detailMovie/:id',(req,res,next) =>{
    const {id} = req.params
    Movie.findById(id)
        .then(movie => {
            res.render('movie/detailMovie',movie)
        })
        .catch(e => {
            next(e)
        })
})

router.get('/new',(req,res,next) =>{
    res.render('movie/new')
})

router.post('/new',(req, res, next)=>{

    Movie.create(req.body)
        .then(movie=>{
            res.send(`Succes ${movie.name} created`)
        }).catch(e=>{
        res.render('movie/new',e)
    })
})

router.get('/delete/:id',(req,res,next) => {
    const {id} = req.params
    Movie.findByIdAndRemove(id)
        .then(movie => {
            res.send(`Succes ${movie.name} deleted`)
        })
        .catch(e => {
            next(e)
        })
})

module.exports = router