const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity.js');



router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then(celebrities => {
    res.render("celebrities/index", { celebrities });
  })
  .catch(error => {
    console.log(error)
  })
});


router.get('/celebrities/show/:id', (req, res, next) => {
  Celebrity.findOne({'_id': req.params.id})
  .then(celebrity => {
    if (!celebrity) {
      return res.status(404).render('not-found');
    }
    res.render("celebrities/show", celebrity )
  })
  .catch(next)
});



router.get('/celebrities/add', (req, res, next) => {
  res.render("celebrities/add")
});

router.post('/celebrities/add', (req, res, next) => {
  let { name, occupation, catchPhrase } = req.body;

  let newCelebrity = new Celebrity({ name, occupation, catchPhrase })
  newCelebrity.save()
  .then((book) => {
    res.redirect('/celebrities')
  })
  .catch((error) => {
    console.log(error)
  })
});


router.get('/celebrities/edit/:id', (req, res, next) => {
  Celebrity.findOne( {_id: req.params.id } )
  .then(( celebrity ) => {
    res.render("celebrities/edit", celebrity )
    console.log(celebrity)
  })
  .catch((error) => {
    console.log(error)
  })
});



router.post('/celebrities/edit/:id', (req, res, next) => {
  let { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate({_id: req.params.id}, { name, occupation, catchPhrase })
  .then((celebrity) => {
    res.redirect('/celebrities')
  })
  .catch((error) => {
    console.log(error)
  })
});



router.get('/celebrities/delete/:id', (req, res, next) => {
  console.log(req.params.id)
  Celebrity.findByIdAndRemove({_id: req.params.id})
  .then((celebrity) => {
    res.redirect('/celebrities')
  })
  .catch((error) => {
    console.log(error)
  })
});

module.exports = router;