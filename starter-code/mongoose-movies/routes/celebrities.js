const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')

// *** CREATE *** //

router.get('/', (req,res,next) => {
    Celebrity.find({})
    .then(celebrities=>{
        res.render('celebrities/index', {celebrities})
    })
    .catch(err=> next())
})

router.get('/:id', (req,res,next) => {
    Celebrity.findById(req.params.id)
    .then(celebrity=>{
        console.log(celebrity);
        res.render('celebrities/show', celebrity)
    })
    .catch(err=> next())

})


router.get('/new', (req,res)=>{
    Celebrity.find()
    .then(results=>{
        res.render('celebrities/new', results)
    })
})

router.post('/new', (req,res)=>{
    console.log(req.body);
    const {name, occupation, catchPhrase} = req.body;
    const newCeleb = new Celebrity(req.body)
    newCeleb.save()
    .then((celeb) => {
        res.redirect('/celebrities')
    })
    .catch((err) => {
        throw err;
})
})

// *** UPDATE *** //

router.get('/:id/edit', (req,res,next) => {
    Celebrity.findById(req.params.id)
    .then(celebrity=>{
        console.log(celebrity);
        res.render('/celebrities/edit', {celebrity})
    })
    .catch(err=> next())
})

router.post('/:id', (req,res,next)=>{
    console.log(req.body);
    Celebrity.findOneAndUpdate(req.params.id, req.body, {new:true}) //what is new:true ?
    .then( () =>{
        res.redirect('/celebrities')
    })
    .catch(err => next())
})


// *** DELETE *** //

router.post('/:id/delete', (req,res,next) => {
    Celebrity.findByIdAndRemove(req.params.id)
    .then(celebrity=>{
        res.redirect('/celebrities')
    })
    .catch(err=> next())

})


module.exports = router;
