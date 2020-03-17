const mongoose = require("mongoose");
const express      = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');


router.get('/', (req, res, next) => {
    Celebrity.find()
    .then(celebrities => {
        res.render('celebrities/index', {celebrities: celebrities});
    })
    .catch (error => {
        console.log('Error while getting the celebities from DB: ', error);
    });
});

router.get('/new', (req, res, next) => {
    res.render('celebrities/new')
});

router.post('/new', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    const newCelebrity = new Celebrity({ name, occupation, catchPhrase })
    newCelebrity.save()
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch((error) => {
      console.log('error Adding Celebriti', error)
    })
  });

  
router.post('/:id/edit', async (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    console.log(req.body)
    await Celebrity.update({_id: req.body.id}, { $set: {name, occupation, catchPhrase}})
    res.redirect('/celebrities');
});


  router.post('/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
    .then(() => {res.redirect('/celebrities')})
    .catch(e => next(e))
})



router.get('/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then((celebrity) => {
        res.render('celebrities/show', celebrity)
    })
    .catch (error => {
        console.log('Error while getting the celebity from DB: ', error);
    }); 
});


router.get('/:id/edit' , async (req, res, next) => {
    const editCeleb = await Celebrity.findById(req.params.id)
    console.log(editCeleb)
    res.render('celebrities/edit', editCeleb)
});

    
    

module.exports = router;



