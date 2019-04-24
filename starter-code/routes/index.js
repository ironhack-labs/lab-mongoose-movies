const express = require('express');

const router = express.Router();
const Celebrity = require('../models/Celebrity.js'); // MODEL DECLARADO

/* GET home page */
router.get('/', (req, res) => {
  res.render('index');
});

// Add Get
router.get('/celebrities/add', (req, res) => {  
  res.render('new');
});
// Add Post
router.post('/celebrities/add', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  newCelebrity
    .save()
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      console.log(error);
    });
});

// Find All
router.get('/celebrities', (req, res) => {  
  Celebrity.find()
    .then((result) => {
      res.render('celebrities/index', { celebrities: result });
    })
    .catch((err) => {
      throw new Error(err);
    });
});

// Show one celebrity
router.get('/celebrities/:id', (req, res) => {
  Celebrity.findById(req.params.id)
    .then((result) => {
      res.render('show', { celebrities: result });
    })
    .catch((err) => {
      throw new Error(err);
    });
});

// Del
router.get('/celebrities/del/:id', (req, res, next) => {
  Celebrity.findOneAndDelete(req.params.id)
    .then(() => {
      res.redirect('/celebrities?msg=Celebrity+Removed');
    })
    .catch((err) => {
      throw new Error(err);
    });
});

// Edit get
router.get('/celebrities/edit/:id', (req, res, next) => {
//  const celebrityId = req.query.celebrities_id;
  Celebrity.findById(req.params.id)
    .then((result) => {
      res.render('edit-celebrity', { celebrities: result }); 
    })
    .catch((err) => {
      throw new Error(err);
    });
});

// Edit post
router.post('/celebrities/edit/:id', (req, res, next) => {
  Celebrity.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((err) => {
      throw new Error(err);
    });
});
module.exports = router;
