const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrities')



router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then(celebrities => {
    console.log(celebrities)
    res.render("celebrities/index", { celebrities });
  })
  .catch(error => {
    console.log(error)
    next(error)
  })
});

router.get('/celebrities/show/:id', (req, res, next) => {
    let celebrityId = req.params.id;
    Celebrity.findOne({'_id': celebrityId})
    .then(celebrity => {
      console.log(celebrity)
      res.render("celebrities/show", { celebrity });
    })
    .catch(error => {
      console.log(error)
      next(error)
    })
});


router.get('/celebrities/new', (req, res, next) => {
    res.render("celebrities/new");
});

router.post('/celebrities/new', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
    newCelebrity.save()
    .then(celebrity => {
        res.redirect('/celebrities');
      })
      .catch(error => {
        console.log(error)
        res.redirect('/celebrities/new');
      })
});

router.post('/celebrities/:id/delete', (req, res, next) => {
    let celebrityId = req.params.id;
    Celebrity.findByIdAndRemove(celebrityId)
    .then(celebrity => {
        res.redirect('/celebrities');
      })
      .catch(error => {
        console.log(error)
        res.redirect('/celebrities/new');
      })
});



router.get('/celebrities/:id/edit', (req, res, next) => {
    let celebrityId = req.params.id;
    Celebrity.findOne({'_id': celebrityId})
    .then(celebrity => {
      console.log(celebrity)
      res.render('celebrities/edit', { celebrity });
    })
    .catch(error => {
      console.log(error)
      next(error)
    })
});


router.post('/celebrities/:id', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    let celebrityId = req.params.id;
    Celebrity.findByIdAndUpdate({'_id': celebrityId},{ name, occupation, catchPhrase } )
    .then(celebrity => {
        res.redirect('/celebrities');
      })
      .catch(error => {
        console.log(error)
        next(error)
      })
});




module.exports = router;
