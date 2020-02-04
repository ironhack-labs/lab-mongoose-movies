const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity_model')

/* GET celebrities page */
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then( celebs => {
        //console.log(celebs);
        res.render('./celebrities/index', {celebs});
    })
    .catch( err => console.log('Error while getting celebrities ', err ))
});

/* GET & POST new celebrities */
router.get('/celebrities/new', (req, res, next) => {
    res.render('./celebrities/new')
})

router.post('/celebrities', (req, res, next) => {
    Celebrity.create( req.body )
    .then( newCeleb => {
        console.log(`New celebrity created: ${newCeleb.name}`)
        res.redirect('/celebrities')
    } )
    .catch( err => console.log('Error while creating a new celebrity ', err ) )
})

/* POST delete celebrity */
router.post('/celebrities/:id/delete', (req, res, next) => {
    //console.log( req.params )
    Celebrity.findByIdAndDelete( req.params.id )
    .then( () => res.redirect('/celebrities'))
    .catch( err => console.log('Error while deleting celebrity ', err ) )
})


/* GET celebrity detail page */
router.get('/celebrities/:id', (req, res, next) => {
    Celebrity.findById( req.params.id)
    .then( foundCeleb => {
        //console.log(foundCeleb)
        res.render('./celebrities/show', {foundCeleb})
    })
    .catch( err => console.log('Error while getting celebrity details ', err ) )
})


module.exports = router;