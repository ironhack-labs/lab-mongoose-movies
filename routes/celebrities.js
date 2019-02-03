const express = require('express');
const CelebritiesModel = require('../models/celebrity');

const router = express.Router();

/* GET celebrities page */

router.get('/', (req, res, next) => {
  CelebritiesModel.find()
    .then((celebrities) => {
      res.render('celebrities', { celebrities });
    })
    .catch((error) => {
      console.error(error);
      next(() => error);
    });
});

/* GET new celebrity */

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

/* POST new celebrity */

router.post('/', (req, res) => {
  console.log(req.body);
  const celebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  };

  const newCelebrity = new CelebritiesModel(celebrity);
  newCelebrity.save()
    .then(() => {
      console.log(`Succes adding ${celebrity.name}`);
      res.render('index');
    })
    .catch((error) => {
      console.log('Celebrity not saved', error);
      res.render('celebrities/new');
    });
});

/* GET celebrity page */

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  CelebritiesModel.findById(id)
    .then((data) => {
      res.render('celebrities/show', { data });
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

module.exports = router;
