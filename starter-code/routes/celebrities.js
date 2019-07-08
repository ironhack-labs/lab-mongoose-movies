const express = require('express');
const Celebrity = require('../models/celebrity');

const router = express.Router();

router.get('/index', (req, res) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render('/celebrities/index', { celebrities });
    })
    .catch(err => console.log('Error:', err));
});

router.get('/new', (req, res) => {
  res.render('/celebrities/new');
});

router.post('/celebrities', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  newCelebrity.save()
    .then((celebrity) => {
      res.redirect('celebrities/index');
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post('/celebrities/:id/delete', (req, res) => {
  const { id } = req.params;
  Celebrity.findByIdAndRemove(id)
    .then((celebrity) => {
      res.redirect('celebrities/index');
    })
    .catch(err => console.log(err));
});

router.get('/celebrities/:id/edit', (req, res) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render('/celebrities/edit', { celebrity });
    })
    .catch(err => console.log(err));
});

router.post('/celebrities/:id', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.update({ _id: req.params.id }, { $set: { name, occupation, catchPhrase } })
    .then((celebrity) => {
      res.redirect('celebrities/index');
    })
    .catch(err => console.log(err));
});

router.get('/celebrities/:id', (req, res) => {
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId)
    .then((celebrity) => {
      res.render('/celebrities/show', { celebrity });
    })
    .catch(err => console.log("ERROR:", err));
});

module.exports = router;
