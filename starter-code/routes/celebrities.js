const express = require('express');
const router = express.Router()
const {
    allCelebritiesView, 
    celebrityDetail, 
    addCelebrityView, 
    addCelebrityPost
} = require('../controllers/celebrities')


router.get('/', allCelebritiesView)
router.get('/celebrities/:id', celebrityDetail)
router.post('/celebrities/new', addCelebrityPost)
// router.get('/celebrities/new', addCelebrityView)
// router.post('/celebrities', celebritiesPost)


module.exports = router;