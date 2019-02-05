const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity');

/* Iteration 2 */
router.get('/', (req, res, next) => {
  Celebrity.find({})
    .then((celebrities) => {
      res.render('celebrities/index', { celebrities });
    })
    .catch(next);
});

/* Iteration 4 */
router.get('/new', (req, res, next) => {
  res.render('celebrities/new')
    .catch((err) => {
      console.log(err);
    });
});

/* Iteration 3 */
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render('celebrities/show', { celebrity });
    })
    .catch(next);
});

/* Iteration 4 */
router.post('/', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then((result) => {
      result.save();
      res.redirect('celebrities');
    })
    .catch((err) => {
      console.log(err);
    });
});

/* Iteration 5 */
router.post('/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findByIdAndRemove(id)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((err) => {
      console.log(err);
    });
});

/* Iteration 6 */
router.get('/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render('celebrities/edit', { celebrity });
    })
    .catch((err) => {
      console.log(err);
    });
});

/* Iteration 6 */
router.post('/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.update({ _id: id }, { name, occupation, catchPhrase })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
