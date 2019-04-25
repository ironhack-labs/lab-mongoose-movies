const express = require('express');

const router = express.Router();
const Celebrity = require('../models/Celebrity.js');

// Add Get
router.get('/celebrity/add', (req, res) => {
  res.render('celebrities/new');
});

// Add Post
router.post('/celebrity/add', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  newCelebrity
    .save()
    .then(() => {
      res.redirect('/celebrity/list');
    })
    .catch((error) => {
      console.log(error);
    });
});

// Find All
router.get('/celebrity/list', (req, res) => {
  Celebrity.find()
    .then((result) => {
      res.render('celebrities/index', { celebrities: result });
    })
    .catch((err) => {
      throw new Error(err);
    });
});

// Show one celebrity
router.get('/celebrity/:id', (req, res) => {
  Celebrity.findById(req.params.id)
    .then((result) => {
      res.render('celebrities/show', { celebrities: result });
    })
    .catch((err) => {
      throw new Error(err);
    });
});

// Del
router.get('/celebrity/del/:id', (req, res) => {
  Celebrity.findOneAndDelete(req.params.id)
    .then(() => {
      res.redirect('/celebrity/list');
    })
    .catch((err) => {
      throw new Error(err);
    });
});

// Edit get
router.get('/celebrity/edit/:id', (req, res) => {
  //  const celebrityId = req.query.celebrities_id;
  Celebrity.findById(req.params.id)
    .then((result) => {
      res.render('celebrities/edit-celebrity', { celebrities: result });
    })
    .catch((err) => {
      throw new Error(err);
    });
});

// Edit post
router.post('/celebrity/edit/:id', (req, res) => {
  Celebrity.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => {
      res.redirect('/celebrity/list');
    })
    .catch((err) => {
      throw new Error(err);
    });
});

module.exports = router;
