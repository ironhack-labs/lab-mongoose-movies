const express = require('express');

const router = express.Router();

const CelebrityModel = require('../models/Celebrity.js');


/* GET home page */
router.get('/', (req, res) => {
  res.render('index');
});

/* GET page celebrities */
router.get('/celebrities', (req, res) => {
  CelebrityModel.find()
    .then((celebrities) => {
      console.log('celebrities', celebrities);
      res.render('celebrities/index', {
        celebritiesList: celebrities
      });
    })
    .catch((error) => {
      console.log(error);
    });
});


/* GET page show celebrities */
router.get('/celebrities/:id', (req, res) => {
  CelebrityModel.findOne({ _id: req.params.id })
    .then((celebrities) => {
      console.log('celebrities', celebrities);
      res.render('celebrities/show', {
        celebrity: celebrities
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

/* GET form celebrity */
router.get('/new', (req, res) => {
  res.render('celebrities/new');
});

/* POST Add new celebrity */
router.post('/new', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new CelebrityModel({ name, occupation, catchPhrase });
  newCelebrity.save()
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      console.log(error);
    });
});

/* GET Delete celebritiy */
router.get('/delete/:id', (req, res) => {
  CelebrityModel.deleteOne({ '_id': req.params.id })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((err) => {
      console.log(err);
    });
});

/* GET form celebritiy */
router.get('/edit/:id', (req, res) => {
  CelebrityModel.findOne({ '_id': req.params.id })
    .then((celebrity) => {
      console.log('aqui', celebrity);
      res.render('celebrities/edit', { celebrity });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/edit/:id', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  CelebrityModel.update({ _id: req.params.id }, { $set: { name, occupation, catchPhrase } })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
