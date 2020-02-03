const express = require('express')
const router =  express.Router()

const {
    celebritiesList,
    celebritieShow,
    celebritieAddGet,
    celebritieAddPost,
    celebritieDelete,
    celebritieEditGet,
    celebritieEditPost
} = require('../controllers/celebrities.controller')

router
    .get('/', celebritiesList)
    .get('/celebrities/:id', celebritieShow)
    .get('/new', celebritieAddGet)
    .post('/new', celebritieAddPost)
    .get('/:id/delete', celebritieDelete)
    .get('/celebrities/:id/edit', celebritieEditGet)
    .post('/celebrities/:id', celebritieEditPost)


module.exports = router