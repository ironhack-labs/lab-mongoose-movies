const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js');

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
      .then(allCelebrities => {
          res.render('celebrities/index', { celebrities: allCelebrities });
    })
    .catch(error => {
        throw new Error (error);
      })
  })

  router.get('/celebrities/:celebrityId', (req, res, next) => {
      const id = req.params.celebrityId;
      Celebrity.findById(id)
      .then(idCelebrities => {
          res.render('celebrities/show', { celebrity: idCelebrities })
      })
      .catch(error => {
        throw new Error (error);
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
          throw new Error (error);
        })
  })

  router.post('/celebrities/:id/delete', (req, res, next) => {
      Celebrity.findByIdAndRemove(req.params.id)
      .then(() => {
          res.redirect('/celebrities')
      })
      .catch((error) => {
        throw new Error (error);
      })
  })

  router.get('/celebrities/:id/edit', (req, res, next) => {
    const editId = req.params.id;
    Celebrity.findById(editId)
    .then((celebritiesEdit) => {
        res.render('celebrities/edit', { celebritiesEdit })
    })
    .catch((error) => {
      throw new Error (error);
    })
  })

  router.post('/celebrities/:id/edit', (req, res, next) => {
      const nId = req.params.id
      Celebrity.findByIdAndUpdate( nId, req.body)
      .then(() => {
        res.redirect('/celebrities');
      })
      .catch((error) => {
        throw new Error (error);
      })
    });

  module.exports = router;