const express = require('express');
const router = express.Router();
const celebrityController = require('../controllers/celebrity.controller');

router.get('/', (req, res, next) => {
  return celebrityController.getCelebrities()
    .then(val => res.render('celebrities/index', {celebrities: val}))
    .catch(err => {
        console.error(err);
        next();
      });
});

router.get('/:id', (req, res, next) => {
  return celebrityController.getCelebrityById(req.params.id)
    .then(val => res.render('celebrities/show', {celebrity: val}))
    .catch(err => {
      console.error(err);
      next();
  });
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/:id/edit', (req, res, next) => {
  celebrityController.getCelebrityById(req.params.id)
    .then(val => res.render('celebrities/edit', {celebrity: val}))
    .catch(err => {
      console.error(err);
      next();
    })

});

router.post('/', (req, res, next) => {
  celebrityController.addCelebrity(req.body.name, req.body.occupation, req.body.catchPhrase)
    .then(() => res.redirect('/celebrities'))
    .catch(err => {
      console.error(err);
      res.render('celebrities/new');
    })
});

router.post('/:id/delete', (req, res, next) => {
  celebrityController.deleteById(req.params.id)
    .then(()=> res.redirect('/celebrities'))
    .catch((err) => {
      console.error(err);
      next();
    });
});

router.post('/:id', (req, res, next) => {
  celebrityController.updateById(req.params.id, req.body.name, req.body.occupation, req.body.catchPhrase)
    .then(() => res.redirect('/celebrities'))
    .catch(err => {
      console.error(err);
      next();
    });
});

module.exports = router;