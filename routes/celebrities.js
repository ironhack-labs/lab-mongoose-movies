const express = require('express');
const Celebrity = require('../model/celebrity');

const router = express.Router();


/* GET celeb listing. */
router.get('/', (req, res, next) => {
  Celebrity.find({})
    .then((celebrities) => {
      res.render('celebrities/index', { celebrities });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  const { name, occupation, catchPhrase } = req.body; // this creates 3 vars from

  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => {
      console.log('added celebrity');
      res.redirect('/celebrities');
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get('/new', (req, res, next) => { // this shows form to user
  res.render('celebrities/new');
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render('celebrities/show', { celebrity });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(next);
});

router.get('/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render('celebrities/edit', { celebrity });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(id, { name, occupation, catchPhrase })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(next);
});

module.exports = router;
