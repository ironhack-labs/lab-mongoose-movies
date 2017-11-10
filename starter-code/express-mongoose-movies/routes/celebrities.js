const express = require('express');
const Celebrities = require('../models/celebrity');
const router = express.Router();

router.get('/', (req, res, next) => {
  Celebrities.find({}, (err, celebrities) => {
    if (err) return next(err);
    res.render('celebrities/index', {
      celebrities: celebrities,
      title: 'Celebrities'
    });
  });
});

// /celebrities/new	| GET	| Show a form to create a celebrity
router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

// /celebrities/:id	| GET	| Show a specific celebrity
router.get('/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrities.findById(celebrityId, (err, celebrity) => {
    if (err) return next(err);
    console.log('celebrity', celebrity);
    res.render('celebrities/show', {
      celebrity : celebrity
    });
  });
});

// /celebrities	| POST | Send the data from the form to this
// route to create the celebrity and save to the database
router.post('/', (req, res, next) => {
  const celebrityInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    imgUrl: req.body.imgUrl,
    alive: req.body.alive,
    catchPhrase: req.body.catchPhrase
  };

  const newCelebrity = new Celebrities(celebrityInfo);

  newCelebrity.save((err) => {
    if (err) {
      return res.render('celebrities/new', {
        celebrity: newCelebrity
      });
    }
    return res.redirect('/celebrities');
  });
});


module.exports = router;
