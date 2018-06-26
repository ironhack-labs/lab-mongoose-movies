const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/', (req, res, next) => {
    Celebrity.find()
      .then(celebrity => {
        // console.log(celebrity)
        res.render("celebrities/index" , {celebrity});
      })
      .catch(error => {
        console.log(error)
        next();
      })
  });

  router.get('/:id', (req, res, next) => {
    let celebId = req.params.id;
    Celebrity.findOne({'_id': celebId})
      .then(celebrity => {
        res.render("celebrities/show", {celebrity});
      })
      .catch(error => {
        console.log(error)
        next();
      })
  });

  router.get('/new', (req, res, next) => {
    res.render("celebrities/new")
  });

  router.post('/new', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCeleb = new Celebrity({name, occupation, catchPhrase});
    newCeleb.save()
    .then((celebrity) => {
      res.redirect('/')
    })
    .catch((error) => {
      console.log(error)
      next();
    })
  });

  router.post('/:id/delete', (req, res, next) => {
    let celebId = req.params.id;
    Celebrity.findByIdAndRemove({'_id':celebId})
      .then((celebrity) => {
        res.redirect('/celebrities')
      })
      .catch((error) => {
        console.log(error)
        next();
      })
    });

    router.get('/:id/edit', (req, res, next) => {
      let celebId = req.params.id;
      Celebrity.findOne({'_id': celebId})
        .then(celebrity => {
          res.render("celebrities/edit", {celebrity});
        })
        .catch(error => {
          console.log(error)
          next();
        })
    });

    router.post('/:id', (req, res, next) => {
      const { name, occupation, catchPhrase } = req.body;
      Celebrity.update({_id: req.params.id}, { $set: { name, occupation, catchPhrase }})
        .then((celebrity) => {
          res.redirect('/celebrities')
        })
        .catch((error) => {
          console.log(error)
          next();
        })
      });

module.exports = router;