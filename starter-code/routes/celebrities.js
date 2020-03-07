const express = require('express');
const router  = express.Router();
const Celebrity    = require('../models/celebrity')

router.get('/', (req, res, next) => {
    Celebrity.find()
    .then(allCelebrities => {
      res.render('celebrities/index', {celebrityData: allCelebrities});
    })
});


router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
});

router.post('/new', (req, res) => {
  const collectData = {
    name: req.body.nameCelebrity,
    occupation: req.body.occupationCelebrity,
    catchPhrase: req.body.phraseCelebrity,
  };
    const celebrity = new Celebrity (collectData)
    Celebrity.create(celebrity)
    .then(() => {
        res.redirect('/celebrities')
      })
});


router.get('/:id', (req, res, next) => {
    const paramCelebrityId = req.params.id
    Celebrity.findOne({_id: paramCelebrityId})
    .then(singleCelebrity => {
        res.render('celebrities/show', {celebrityData: singleCelebrity});
    })
});


router.post('/:id/delete', (req, res, next) => {
    const paramCelebrityId = req.params.id
    Celebrity.findByIdAndRemove({_id: paramCelebrityId})
    .then(() => {
      res.redirect('/celebrities');
    })
});


router.get('/:id/edit', (req, res, next) => {
    Celebrity.findById(req.params.id)
      .then(celebrity => {
        res.render('celebrities/edit', { celebrity });
      })
  });




router.post('/:id', (req, res, next) => {
    const { id } = req.params;
    const {name, occupation, catchPhrase} = req.body;

    Celebrity.update({ _id : id }, { $set: { name, occupation, catchPhrase }})
	.then(() => {
        res.redirect('/celebrities');
	})
});


module.exports = router;