const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js');

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
      .then(allCelebrities => {
          res.render('celebrities/index', { celebrities: allCelebrities });
        //   console.log('DB:', allCelebrities);
    })
    .catch(error => {
        next(error)
        console.log('Error while getting the celebrity from the DB: ', error);
      })
  })

  router.get('/celebrities/:celebrityId', (req, res, next) => {
      const id = req.params.celebrityId;
      Celebrity.findById(id)
      .then(idCelebrities => {
          res.render('celebrities/show', { celebrity: idCelebrities })
      })
      .catch(error => {
        next(error);
    console.log('Error while retrieving celebrity details: ', error);
      })
  })

  router.get('/new', (req, res, next) => {
          res.render('celebrities/new');
  } )

  router.post('/celebrities', (req, res, next) => {
      Celebrity.create(req.body)
      .then(() => {
          res.redirect('/celebrities');
      })
      .catch((error) => {
          res.redirect('/new')
          console.log(error);
      })
  })

  router.post('/celebrities/:id/delete', (req, res, next) => {
    //   const id = req.body.id
      Celebrity.findByIdAndRemove(req.params.id)
      .then(() => {
          res.redirect('/celebrities')
      })
      .catch((error) => {
          next(error)
      })
  })

  router.get('/celebrities/:id/edit', (req, res, next) => {
    const editId = req.params.id;
    Celebrity.findById(editId)
    .then((celebritiesEdit) => {
        res.render('celebrities/edit', { celebritiesEdit })
    })
    .catch((error) => {
        console.log(error);
        next();
    })
  })

  router.post('/celebrities/:id/edit', (req, res, next) => {
    //   const { name, occupation, catchPhrase } = req.body;
      const nId = req.params.id
      Celebrity.findByIdAndUpdate( nId, req.body)
      .then(() => {
        res.redirect('/celebrities');
      })
      .catch((error) => {
        console.log(error);
      })
    });

  module.exports = router;