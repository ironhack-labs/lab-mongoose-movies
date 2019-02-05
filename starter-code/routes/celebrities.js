const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity');

/* GET celebrities page */
router.get('/', (req, res, next) => {
  Celebrity.find({})
    .then((celebrities) => {
      res.render('celebrities/index', { celebrities });
    })
    .catch(next);
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new')
    .catch((err) => {
      console.log(err);
    });
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render('celebrities/show', { celebrity });
    })
    .catch(next);
});


router.post('/', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then((result) => {
      result.save();
      res.redirect('/celebrities');
    })
    .catch((err) => {
      console.log(err);
    });
});

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



module.exports = router;
