const express = require('express');
const Celeb = require('../models/celebrity');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  Celeb.find({}, (err, celeb) => {
    if (err) {
      return next(err);
    }
    res.render('celebrities/index', {celeb : celeb});
  });
});


router.get('/new', (req, res, next) => {
  res.render('celebrities/new', {celeb: new Celeb()});
 });


router.post('/', (req, res, next) => {
  const newCelebrities = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase,
    };

    const NewCelebrity = new Celeb(newCelebrities);

    NewCelebrity.save( (err) => {
      if (err) {
        return res.render('/celebrities/new', {celeb: NewCelebrity});
      }
      return res.redirect('/celeb');

  });
});




router.get('/:id', (req, res, next) => {
  let celebId = req.params.id;
  Celeb.findById(celebId, (err, celeb) => {
    if (err) {
      return next(err);
    }
    res.render('celebrities/show', {celeb : celeb});
  });
});

module.exports = router;
