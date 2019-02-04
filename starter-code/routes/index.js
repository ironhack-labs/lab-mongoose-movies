const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebs => {
      res.render("celebrities", { celebrities: celebs });
    })
    .catch(error => {
      console.log(error)
    })
});

router.get('/newcelebrity', (req, res, next) => {
  res.render("celeb-new");
});

router.get('/celebrities/:id', (req, res, next) => {
  let celebId = req.params.id;
  Celebrity.findOne({'_id': celebId})
    .then(celebs => {
      res.render("celeb-details", { celebrities: celebs })
    })
    .catch(error => {
      console.log(error)
    })
});


router.post('/newcelebrity', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCeleb = new Celebrity({ name, occupation, catchPhrase });
  newCeleb.save()
    .then((celeb) => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      console.log(error);
  })
});

router.get('/celebrities/edit/:id', (req, res, next) => {
  Celebrity.findOne({ "_id": req.params.id })
    .then((celeb) => {
      res.render("celeb-edit", { celeb });
    })
    .catch(err => {
      console.log(err);
    })
});

router.post('/celebrities/edit', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.update({_id: req.query.celebId}, { $set: { name, occupation, catchPhrase }})
  .then((celeb) => {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  })
});


router.get('/celebrities/del/:id', (req, res, next) => {
  Celebrity.deleteOne({ "_id": req.params.id })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(err => {
      console.log(err);
    })
});

module.exports = router;
