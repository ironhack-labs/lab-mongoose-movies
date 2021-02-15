const express = require('express');
const router = express.Router()
const Celebrity = require('../models/celebrity.Model')

router.get('/celebrities', (req, res, next) =>{
    Celebrity.find({})
        .then((celebrity) => {
            res.render('celebrities/index', {celebrity:celebrity})
        })
        .catch((e) => next(e))
})

router.get('/celebrities/:id', (req, res, next) =>{
    Celebrity.findById(req.params.id)
        .then((celebrity) => {
            res.render('celebrities/show', celebrity)
        })
        .catch((e) => next(e))
})

router.get('/celebrity/new', (req, res, next) => {
    res.render('celebrities/new')
})

router.post('/celebrity/new', (req, res, next) => {
    console.log(req.body)
    const { name, occupation, catchPhrase, image} = req.body

    Celebrity.create({ name, occupation, catchPhrase, image})
        .then(celebrityFromDB => console.log(`New celebrity created: ${celebrityFromDB.name}.`))
        .then(() => res.redirect('/celebrities'))
        .catch((e) => next(e));
})

router.post('/celebrity/:id/delete', (req, res, next) => {
    // Iteration #5: Delete the drone
    Celebrity.findByIdAndDelete(req.params.id)
        .then((d) => {
            console.log(`Celebrity ${d.name} has been eliminated`)
            res.redirect('/celebrities')
        })
        .catch(
            error =>
                console.log(`Error while deleting a single celebrity: ${error}`)
        )
});

router.get('/celebrity/:id/edit', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(celebritiesToEdit => {
            //console.log(droneToEdit
            res.render('celebrities/edit', celebritiesToEdit)
        })
        .catch(e => console.error(`Error while getting a single celebrity for edit: `, e))
});

router.post('/celebrity/:id/edit', (req, res, next) => {
    const { id } = req.params;
    const { name, occupation, catchPhrase, image } = req.body
    console.log()
    Celebrity.findByIdAndUpdate(id, { name, occupation, catchPhrase, image }, { new: true })
        .then(() =>{
            res.redirect('/celebrities')
        })
        .catch(error =>
            console.log(`Error while updating a single celebrity: ${error}`)
        );
});


module.exports = router