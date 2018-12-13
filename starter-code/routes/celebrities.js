const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js');


router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      // console.log(celebrities);
      res.render("celebrities", { celebrities });
    })
    .catch(error => {
      console.log(error)
    })
  });

  router.get('/celebrities/new', (req, res, next) => {
      res.render("celebrities/new");
  });

  router.post('/celebrities/new', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    const newCeleb = new Celebrity({ name, occupation, catchPhrase})
    newCeleb.save()
    .then(celebrity => {
      res.redirect('/celebrities/index');
    })
    .catch((error) => {
      console.log(error);
    })
  });

  router.get('/celebrities/:id', (req, res, next) => {
    let celebId = req.params.id;
    Celebrity.findOne({'_id': celebId})
      .then(celebrity => {
        res.render("celebrities/show", { celebrity });
      })
      .catch(error => {
        console.log(error)
      })
    });
  

module.exports = router;