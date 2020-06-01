const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity');

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then(allCelebrities => {
            res.render('celebrities/index', { celebrities: allCelebrities });

        })
        .catch(error => {
            console.log('No encuentra famosos', error);
        })

});

router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new')
});

router.get('/celebrities/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(celebrity => {
            res.render('celebrities/show', { celebrity: celebrity });

        })
        .catch(error => {
            console.log('No encuentra datos del famoso', error);
        })

});


router.post('/celebrities', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    const newCelebrity = new Celebrity({ name, occupation, catchPhrase })
    newCelebrity.save()
        .then(celebrity => {
            res.redirect('celebrities')
        })
        .catch((error) => console.log(error))
});

router.post('/celebrities/:id/delete', (req,res,next)=>{
    Celebrity.findByIdAndRemove(req.params.id)
    .then(celebrity=>res.redirect('/celebrities'))
    .catch(error => console.log(error))
});

router.get('/celebrities/:id/edit', (req, res, next) => {    
    Celebrity.findById(req.params.id)
    .then(celebrity=>{
        res.render('celebrities/edit', {celebrity:celebrity})
    })
    .catch(error => console.log(error))
    
});

router.post('/celebrities/:id', (req, res, next)=>{
    const { name, occupation, catchPhrase } = req.body;
    Celebrity.update({_id:req.params.id},{$set:{name,occupation, catchPhrase}},{ new: true })
    .then(celebrity=>res.redirect('/celebrities'))
    .catch(error => console.log(error))
})


module.exports = router




