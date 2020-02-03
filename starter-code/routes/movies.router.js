const express = require('express')
const router =  express.Router()

const {
    moviesList,
    moviesShow,
    movieAddGet,
    movieAddPost,
    movieDelete,
    movieEditGet,
    movieEditPost
} = require('../controllers/movies.controller')

router
    .get('/', moviesList)
    .get('/add', movieAddGet)
    .get('/:id/delete', movieDelete)
    .get('/:id', moviesShow)
    .post('/add', movieAddPost)
    .get('/:id/edit', movieEditGet)
    .post('/:id', movieEditPost)


module.exports = router