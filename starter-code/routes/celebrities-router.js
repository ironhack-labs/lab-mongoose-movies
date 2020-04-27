const express = require('express');
const celebrityRouter = express.Router();
const Celebrity = require('../models/celebrity');


/* GET home page */
celebrityRouter.get('/', (req, res, next) => {
  Celebrity.find()
    .then((allCelebrities) => {
      res.render('celebrities/index', { allCelebrities: allCelebrities });
    })
    .catch((err) => next(err));
});

celebrityRouter.get('/details/:celebrityId', (req, res, next) => {
  const id = req.params.celebrityId
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render('celebrities/details', { celebrity: celebrity });
    })
    .catch((err) => next(err));
});

celebrityRouter.get('/new', (req, res, next) => {

  res.render('celebrities/new');
})


celebrityRouter.get('/:celebrityId/edit', (req, res, next) => {
  const id = req.params.celebrityId
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render('celebrities/edit', { celebrity: celebrity });
    })
    .catch((err) => next(err));
});

celebrityRouter.get('/new', (req, res, next) => {

  res.render('celebrities/new');
})


// POST     /celebrities/:id/delete
celebrityRouter.post('/:id/delete', (req, res) => {
  const { id } = req.params;

  Celebrity.findByIdAndRemove(id)
    .then(() => res.redirect('/celebrities'))
    .catch((err) => console.log(err));
})



// POST     /celebrities
celebrityRouter.post('/', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;

  // ADD CELEBRITY TO DB
  Celebrity.create({ name, occupation, catchPhrase })
    .then((celebrity) => {
      console.log('celebrity :>> ', celebrity);
      res.redirect('/celebrities/');
    })
    .catch(() => res.redirect('/celebrities/new'));

})


// POST     /celebrities/:celebrityId   - Takes the update data for the book
celebrityRouter.post('/:id', (req, res) => {
  const { id } = req.params;
  const { name, occupation, catchPhrase } = req.body;
  console.log(id);
  console.log(name, occupation, catchPhrase);

  Celebrity.updateOne({ _id: id }, { name, occupation, catchPhrase })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((err) => next(err));
});

module.exports = celebrityRouter;
