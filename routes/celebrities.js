const express = require('express');
const CelebritiesModel = require('../models/celebrity');

const router = express.Router();

/* GET celebrities page */

router.get('/', (req, res, next) => {
  CelebritiesModel.find()
    .then((celebrities) => {
      res.render('celebrities/celebrities', {
        celebrities,
      });
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
      res.redirect('celebrities');
    })
    .catch((error) => {
      console.log('Celebrity not saved', error);
      res.render('celebrities/new');
    });
});

/* GET celebrity page */

router.get('/:id', (req, res, next) => {
  const {
    id
  } = req.params;
  CelebritiesModel.findById(id)
    .then((celebrity) => {
      res.render('celebrities/show', {
        celebrity,
      });
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

/* GET edit celebrity */

router.get('/:id/edit', (req, res, next) => {
  const {
    id
  } = req.params;
  CelebritiesModel.findById(id)
    .then((celebrity) => {
      res.render('celebrities/edit', {
        celebrity,
      });
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

/* POST edit celebrity */

router.post('/:id', (req, res, next) => {
  const {
    id,
  } = req.params;

  const updatedCelebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  };

  CelebritiesModel.findByIdAndUpdate(
    id,
    updatedCelebrity, {
      new: true,
    },
  )
    .then(() => res.redirect('/celebrities'))
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

/* POST delete celebrity */

router.post('/:id/delete', (req, res, next) => {
  const {
    id
  } = req.params;
  CelebritiesModel.findByIdAndRemove(id)
    .then(() => res.redirect('/celebrities'))
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

module.exports = router;
