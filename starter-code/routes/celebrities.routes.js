const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity.model')


router.get('/add', (req, res) => res.render('celebrity-add'))

router.post('/add', (req, res) => {

    const {
        name,
        occupation,
        catchPhrase,
    } = req.body

    Celebrity.create({
            name,
            occupation,
            catchPhrase,
        })
        .then(x => res.redirect('/celebrities/add'))
        .catch(err => 'error with creating celeb', err)
})
router.get('/', (req, res) => {
    Celebrity.find()
        .then(allCelebrities => res.render('celebrities', {
            celeb: allCelebrities
        }))
        .catch(err => console.log("Error finding all celebrities: ", err))
});

router.get('/:id', (req, res) => {
    Celebrity.findById(req.params.id)
        .then(oneCelebrity => res.render('celebrity-show', {
            oneCeleb: oneCelebrity
        }))
        .catch(err => console.log("Error finding one celeb: ", err))
});


router.get('/delete/:id', (req, res) => {
    Celebrity.findByIdAndDelete(req.params.id)
        .then(oneCelebrity => res.render('celebrity-delete', {
            deleteCeleb: oneCelebrity
        }))
        .catch(err => console.log("Error deleting celeb: ", err))
});

router.get('/edit', (req, res) => {
    Celebrity.findOne({
            _id: req.query.celebrity_id
        })
        .then(oneCelebrity => res.render('celebrity-edit', {
            editCeleb: oneCelebrity
        }))
        .catch(err => console.log("Error editing celeb: ", err))
});

router.post('/edit/:id', (req, res) => {

    const {
        name,
        occupation,
        catchPhrase,
    } = req.body

    Celebrity.Update({
            _id: req.query.celebrity_id
        }, {
            $set: {
                name,
                occupation,
                catchPhrase,
            }
        })
        .then(x => res.redirect('/celebrities'))
        .catch(err => 'error with updating celeb', err)
})

module.exports = router