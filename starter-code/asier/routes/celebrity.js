var express = require('express');
const Celebrity = require('../models/celebrity');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  Celebrity.find({}, (err, celebrity) => {
    if (err) { return next(err) }

    res.render('celebrity/index', {
      celebrity: celebrity
    });
  });
});

router.get('/new', (req, res, next) => {
  res.render('celebrity/new', {
    celebrity: new Celebrity()
  });
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
      return res.render('celebrity/new', {
        celebrity: newCelebrity
      })
    }

    return res.redirect('/celebrity');
  });
});


router.get('/:id', (req, res, next) => {
  let id = req.params.id

  Celebrity.findById(id, (err, celebrity) => {
    res.render('celebrity/show', {
      celebrity: celebrity
    })
  })
});

router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id

  Celebrity.findById(id, (err, celebrity) => {
    res.render('celebrity/edit', {
      celebrity: celebrity
    })
  })
});

router.post('/:id', (req, res, next) => {
  let id = req.params.id

  const updates = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  Celebrity.findByIdAndUpdate(id, updates, (err, celebrity) => {
    if (err){ return next(err); }

    return res.redirect(`/celebrity/${celebrity._id}`);
  });
});

router.post('/:id/delete', (req, res, next) => {
  let id = req.params.id

  Celebrity.findByIdAndRemove(id, (err, celebrity) => {
    if (err){ return next(err); }

    return res.redirect('/celebrity');
  });
});


module.exports = router;
