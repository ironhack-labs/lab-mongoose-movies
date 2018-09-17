const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js')


/* GET home page */
//ALL CELEBS
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
  .then((celebrities) => {
    res.render("celebrities/index", { celebrities })
  })
  .catch(next)
});

//RENDER CREATE NEW PAGE
router.get('/celebrities/new', (req,res,next) => {
    res.render('celebrities/new')
})

//DETAILS
router.get('/celebrities/:id', (req,res,next) => {
    let celebrityId = req.params.id;
    console.log(celebrityId);
    
    Celebrity.findOne({'_id': celebrityId})
    .then(celebrity => {
        res.render('celebrities/show', { celebrity });
    })
    .catch(next)
})

//CREATE NEW
router.post('/celebrities/new', (req,res,next) => {
    let { name, occupation, catchPhrase } = req.body;
    const newCeleb = new Celebrity({ name, occupation, catchPhrase })
    newCeleb.save()
    .then(() => {
        res.redirect('../celebrities')
    })
    .catch(() => {
        res.render('/celebrities/new')
    })
})

//UPDATE
router.get('/celebrities/:id/edit', (req,res,next) => {
    let celebrityId= req.params.id;
    Celebrity.findOne({'_id': celebrityId})
    .then(celebrity => { 
            res.render('celebrities/edit', { celebrity })
    })
    .catch(next)
})

 router.post('/celebrities/:id', (req,res,next) => {
    let celebrityId = req.params.id;
    let { name, occupation, catchPhrase } = req.body;
    Celebrity.update({'_id': celebrityId}, { $set: {name ,occupation, catchPhrase}})
    .then(() => {
        res.redirect('/celebrities')
    })
    .catch(next)
}) 

//DELETE
router.post('/celebrities/delete/:id', (req,res,next) => {
    let celebrityId = req.params.id;
    Celebrity.findOneAndDelete({'_id': celebrityId})
    .then(() => {
        res.redirect('/celebrities')
    })
    next();
})


module.exports = router;