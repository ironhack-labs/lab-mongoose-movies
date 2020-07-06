const express = require('express');
const router  = express.Router();

const Celebrities = require('../models/Celebrities.model.js')

/* GET home page */
router.get('/celebrities', (req, res) => {
    Celebrities.find({})
        .then(celebrities => res.render('celebrities/index',  { celebrities }))
        .catch(err => console.log('Error', err))
});

router.get('/celebrities/:id', (req, res) => {
    Celebrities
        .findById(req.params.id)
        .then(celebById => res.render('celebrities/show', { celebById }))
        .catch(err => console.log('Error', err))
})


router.get('/newceleb', (req, res) => {
    res.render('./celebrities/new')
})

router.post('/newceleb', (req,res) => {
    const { name, occupation, catchPhrase } = req.body
    Celebrities
        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(e => console.log(e))
  
})


router.post('/celebrities/:id/delete',(req,res) => {
    Celebrities.findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/celebrities'))
        .catch(e => console.log(e))
})

router.get('/celebrities/:id/edit',(req,res) => {
    Celebrities.findById(req.params.id)
        .then(celebrity => res.render('celebrities/edit', { celebrity }))
        .catch(e => console.log(e))
})

router.post('/celebrities/:id/edit',(req,res) => {
    const {name, occupation, catchPhrase} = req.body
    Celebrities.findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase }, { new: true })
        .then(() => res.redirect('/celebrities'))
        .catch(e => console.log(e))
})

module.exports = router