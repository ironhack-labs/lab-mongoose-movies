const express = require('express');
const router  = express.Router();
const Celebrity = require('../model/Celebrity');

router.get('/', (req, res, next) => {
    Celebrity.find()
        .then( celebrity => {
            console.log('Celebrities: ', celebrity)
            res.render('celebrities/index', {celebrity})
        })
        .catch( (err) => {
            next(err)
        })
  });
  
router.get('/new', (req, res, next) => {
    res.render('celebrities/new')
});

router.post('/new', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body;
    console.log(req.body);
    const newCelebrity = new Celebrity({ name, occupation, catchPhrase});
    newCelebrity.save()
        .then( () => {
          res.redirect('/celebrities')
        })
        .catch( (err) => {
          console.log(err);
          res.redirect('/celebrities/new')
        })
    })

router.get('/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then( (celebrity) => {
          console.log(celebrity)
          res.render('celebrities/show', {celebrity})
        })
        .catch( (err) => {
          next(err)
        })
    });

router.post('/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
        .then( (celebrity) => {
          console.log(celebrity)
          res.redirect('/celebrities')
        })
        .catch( (err) => {
          next(err)
        })
    });

router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
      .then( (celebrity) => {
        console.log(celebrity)
        res.render('celebrities/edit', {celebrity})
      })
      .catch( (err) => {
        next(err)
      })
  });

  router.post('/:id/edit', (req, res, next) => {
    const celebrityId = req.params.id;
    const {name, occupation, catchPhrase} = req.body
    Celebrity.update(
      { _id: celebrityId },
      { $set: { name, occupation, catchPhrase } }
    )
    .then( (celebrity) => {
      res.redirect('/celebrities')
    })
    .catch( (err) => {
      next(err)
    })
  });

module.exports = router;
