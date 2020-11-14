
const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity');

// Iteration #2: Listing Our Celebrities
router.get('/', (req, res, next) => {
    Celebrity
    .find({}, {name: 1, occupation: 1, catchPhrase: 1})
    .then((celebrity)=>{
        res.render('celebrities', {celebrity})
    })
    .catch((error)=>{
        console.log(error)
        res.send(error)
    })
});

//Iteration #3: The Celebrity Details Page
router.get('/details/:id', (req, res, next) => {

    const celebrityId = req.params.id

    Celebrity
    .findById(celebrityId)
    .then(oneCelebrity => {
        res.render('celebrities/show', oneCelebrity)
    })
    .catch((error)=>{
        console.log(error)
        res.send(error)
    })
})

//Iteration #4: Adding New Celebrities
router.get('/new', (req, res, next) => {
    
    const newCelebrity = req.body
    
    Celebrity
    .create(newCelebrity)
    .then(newCebForm => {
        res.render('celebrities/new', newCebForm)
    })
    .catch((error)=>{
        console.log(error)
        res.send(error)
    })
})

router.post('/', (req, res, next) => {

    const newCelebrity = req.body
    
    Celebrity
    .create(newCelebrity)
    .then(result => {
        console.log(result)
        res.redirect('celebrities')
    })
    .catch((error)=>{
        console.log(error)
        res.send(error)
    })
})


//Iteration #5: Deleting Celebrities
router.post('/:id/delete', (req, res, next) => {
    
    const id = req.params.id

    Celebrity
    .findByIdAndRemove(id)
    .then(result => {
        console.log(result)
        res.redirect('/celebrities')
    })
    .catch((error)=>{
        console.log(error)
        res.send(error)
    })

})

//Iteration #6 (Bonus): Editing Celebrities
router.get('/details/:id/edit', (req, res, next) => {

    const id = req.params.id
    
    Celebrity
    .findById(id)
    .then(celebrity => {
        res.render('celebrities/edit', celebrity)
    })
    .catch((error)=>{
        console.log(error)
        next(error)
    })
})

router.post('/:id/', (req, res, next) => {

    const id = req.params.id
    const updatedCelebrity = req.body
    
    Celebrity
    .findByIdAndUpdate(id, updatedCelebrity)
    .then(result => {
        console.log(result)
        res.redirect('/celebrities')
    })
    .catch((error)=>{
        console.log(error)
        res.send(error)
    })

})



module.exports = router;