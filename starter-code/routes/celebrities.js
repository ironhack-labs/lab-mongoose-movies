const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity')

router.get('/celebrities', (req,res,next) => {
    Celebrity.find()
    .then(celebritiesDb => {
        console.log(`celebs ${celebritiesDb} here`)
        res.render('celebrities/index', {celebrities: celebritiesDb})
    })
    .catch((err) => console.log(`something happened while getting celebs ${err}`))
})

router.get('/celebrities/new', (req,res) =>{
    res.render('celebrities/new')
})


router.post('/celebrities/new', (req,res) => {
    const {name, occupation, catchPhrase} = req.body;
    Celebrity.create({name, occupation, catchPhrase})
    .then(res.redirect('/celebrities'))
    .catch((err)=> console.log(`error while creating a new celeb${err}`))
})


router.get('/celebrities/:celebId', (req,res,next) => {
    const {celebId} = req.params;
    Celebrity.findById(celebId)
    .then(singleCeleb => {
        console.log(`one celeb is showing ${singleCeleb}`)
        res.render('celebrities/celeb-show', singleCeleb)
    })
    .catch((err) => console.log(`an error occurred while showing a celeb ${err}`))
}) 


router.post('/celebrities/:celebId/delete', (req,res) => {
    const {celebId} = req.params
    Celebrity.findByIdAndDelete(celebId)
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log(`error while deleting a celeb ${err}`))
})

router.get('/celebrities/:celebId/edit', (req,res)=> {
    const {celebId} = req.params
    Celebrity.findById(celebId)
    .then(celebToEdit => {
        res.render('celebrities/edit', celebToEdit);
    })
    .catch(err => console.log(`error while displaying edit page ${err}`))
})

router.post('/celebrities/:celebId/edit', (req,res) => {
    const {celebId} = req.params;
    const {name, occupation, catchPhrase} = req.body;
    Celebrity.findByIdAndUpdate (
        celebId,
        {name, occupation, catchPhrase},
        {new:true}
    )
    .then(() => res.redirect('/celebrities'))
    .catch((err) => console.log(`error while editing a celeb${err}`))
})

module.exports = router;