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
    .get('/add', celebritieAddGet)
    .get('/:id/delete', celebritieDelete)
    .get('/:id', celebritieShow)
    .post('/add', celebritieAddPost)
    .get('/:id/edit', celebritieEditGet)
    .post('/:id', celebritieEditPost)


module.exports = router