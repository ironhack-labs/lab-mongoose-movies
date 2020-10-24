

const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js'); //importamos celebrity de la colección

//ITERATION 2

router.get('/', (req, res, next) => {
    Celebrity.find()
      .then(allTheCelebritiesFromDB => {
        console.log('Retrieved celebrities from DB:', allTheCelebritiesFromDB);
        res.render('celebrities/index', { celebrities: allTheCelebritiesFromDB });
      })
      .catch(error => {
        next()
        console.log('Error while getting the celebrities from the DB: ', error);
      })
  });



//ITERATION 4

router.get('/add', (req, res, next) => {
    res.render('celebrities/new');
});


router.post('/add', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body; 
    const newCelebrity = new Celebrity({name, occupation, catchPhrase}) 
    newCelebrity.save()
    .then((celebrity) => {
        res.redirect('/');
    })
    .catch((error) => {
        console.log(error)
    })
});

//ITERATION 3

router.get('/:celebrityId', (req, res, next) =>  {
    Celebrity.findById(req.params.celebrityId)
    .then(theCelebrity => {
      res.render('celebrities/show', { celebrity: theCelebrity });
    })
    .catch(error => {
      next()
      console.log('Error while retrieving celebrity details: ', error);
    })
});

//ITERATION 5
router.get("/:celebrityId/delete", (req, res, next) => {
    res.render("/");
  });

router.post('/:celebrityId/delete', (req, res, next) =>  {
    Celebrity.findByIdAndRemove({_id: req.params.celebrityId})
    .then((celebrity) => {
        res.redirect('/celebrities');
    })
    .catch((error) => {
        console.log(error)
    })
});



module.exports = router;