const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
        res.render('celebrities/index',{celebrities})
    })
    .catch(error => {
        console.log(error)
    })
}); 


router.get('/add', (req, res, next) => {
    res.render('celebrities/new');
  });   

router.post('/', (req, res, next) => {
    const {name,occupation,catchphrase} = req.body;
    const newCelebrity = new Celebrity({name, occupation, catchphrase});
    newCelebrity.save()
        .then((celebrity) => {
            res.redirect('/celebrities')
        })
        .catch(error => {
            console.log(error)
            res.render('/celebrities/new');
        })
});

router.post('/:id/delete', (req,res,next) => {
    Celebrity.findByIdAndRemove(req.params.id)
    .then(() => {
        res.redirect('/celebrities')
    })
    .catch(error => {
        console.log(error)
    })
});

router.get('/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then(celebrity => {
        res.render('celebrities/show',{celebrity})
    })
    .catch(error => {
        console.log(error)
    })
});


module.exports = router;