const express = require('express');

const celebritiesRouter = express.Router();

const Celebrity = require('../models/Celebrity');

/* GET celebrities page */
celebritiesRouter.get('/celebrities', (req, res) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render('celebrities', { celebrities });
    })
    .catch((error) => {
      console.log(error);
    });
});

/* GET celebrities detail */
celebritiesRouter.get('/celebrities/:id', (req, res) => {
  const celebrityId = req.params.id;
  Celebrity.findOne({ _id: celebrityId })
    .then((celebrity) => {
      res.render('celebrities/show', { celebrity });
    })
    .catch((error) => {
      console.log(error);
    });
});

/* GET celebrity add */
celebritiesRouter.get('/new', (req, res) => {
  res.render('celebrities/new');
});
/* POST celebrity add */
celebritiesRouter.post('/new', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  newCelebrity.save()
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      console.log(error);
    });
});

/* POST celebrity delete */
celebritiesRouter.post('/celebrities/:id/delete', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findByIdAndRemove({ _id: celebrityId })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      next();
      console.log(error);
    });
});

// /* GET celebrities edit */
celebritiesRouter.get('/celebrities/:id/edit', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findOne({ _id: celebrityId })
    .then((celebrity) => {
      res.render('celebrities/edit', { celebrity });
    })
    .catch((error) => {
      next();
      console.log(error);
    });
});
/* POST celebrities edit */
celebritiesRouter.post('/edit', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.update({ _id: req.query.celebrity_id }, { $set: { name, occupation, catchPhrase } })
    .then((celebrity) => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = celebritiesRouter;
