const celebrity = require('../models/Celebrity');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    celebrity.find()
    .then(celebrities => {
      console.log('a')
      console.log(celebrities);
      res.render('celebrities/index', {
        celebrities
      });
    })
    .catch(error => {
        next(error);
      });
  });

  router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
  });

  router.post('/', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    celebrity.create({
      name,
      occupation,
      catchPhrase,
    })
      .then(() => {
        res.redirect('/celebrities');
      })
      .catch(next);
  });
  

router.get('/:id', (req, res, next) => {
    celebrity.findById(req.params.id)
      .then(celebrity => {
        console.log('a');
        res.render('celebrities/show', { celebrity });
      })
      .catch(error => {
        next(error);
      })
});

router.post('/:id/delete', (req, res, next) => {
  celebrity.findByIdAndDelete(req.params.id)
		.then(() => {
			res.redirect('/celebrities');
		})
		.catch(next);
});

router.get('/:id/edit', (req, res, next) => {
  celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render('celebrities/edit', { celebrity });
    })
    .catch(next);
});

router.post('/:id', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const { id } = req.params;
  celebrity.update({ _id : id }, 
    { $set: { 
      name, 
      occupation, 
      catchPhrase 
    }})
		.then(() => {
			res.redirect('/celebrities');
		})
		.catch(next);
});



module.exports = router;