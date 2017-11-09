const express = require('express');
const Celebrity = require('../models/celebrity');

const router  = express.Router();

router.get('/', (req, res, next) => {
  console.log("holacaracola");
  Celebrity.find({}, (err, result) => {
    if (err) { return next(err) }
console.log(result);
    res.render('celebrities/index', {
      celebrities: result
    });
  });

});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new', {
    celebrity: new Celebrity()
  });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id
  Celebrity.findById(id, (err, celebrities) => {
    if (err) { return next(err) }
    res.render('celebrities/show', {
      celebrities: celebrities
    })
  })
});

router.post('/', (req, res, next) => {
  const celebrityInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
    };

  // Create a new Product with the params
  const newCelebrity = new Celebrity(celebrityInfo);

  newCelebrity.save((err) => {
    if (err) {
      return res.render('celebrities/new', {
        celebrity: newCelebrity
      })
    }

    return res.redirect('/celebrities');
  });
});


router.post('/:id/delete', (req, res, next) => {
  let id = req.params.id

  Celebrity.findByIdAndRemove(id, (err, product) => {
    if (err){ return next(err); }

    return res.redirect('/celebrities');
  });
});





module.exports = router;
