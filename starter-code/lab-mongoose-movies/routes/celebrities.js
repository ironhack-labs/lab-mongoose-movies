const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity")



/* GET the new page */
router.get('/new', (req, res, next) => {
  res.render('celebrities/new');

});

/* POST celebrities page */
router.post('/', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  const celebrity = new Celebrity({name, occupation, catchPhrase});
  celebrity.save().
  then(celebrity => {
    res.redirect('/celebrities');
  })
  .catch(err => {
    res.render('celebrities/new')
  })
});
/* POST delete page */
router.post('/:id/delete', (req, res, next) => {
  let celebrity = req.params.id;
  Celebrity.findByIdAndRemove(celebrity)
  .then(() => {
    res.redirect('/celebrities');
  })
  .catch(error => {
    next();
  })
});



/* GET celebrities page */
router.get('/', (req, res, next) => {
  Celebrity.find().then(celebrities => {
    res.render('celebrities/index', {celebrities});
  })
});
/* GET edit specific page */
router.get('/:id/edit', (req, res, next) => {
  let celebrity = req.params.id;
  Celebrity.findById(celebrity).then(celebrity => {
    res.render('celebrities/edit', {celebrity});
  })
  .catch(err => {
    next();
    return err;
  })
});

/* POST edit celebrities page */
router.post('/:id', (req, res, next) => {
  let celebrity = req.params.id;
  const {name, occupation, catchPhrase} = req.body;
  const editCelebrity = {name, occupation, catchPhrase};
  Celebrity.findByIdAndUpdate(celebrity, editCelebrity)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(err => {
      next();
      return err;
    })
});
/* GET celebrity specific page */
router.get('/:id', (req, res, next) => {
  let celebrity = req.params.id;
  Celebrity.findById(celebrity).then(celebrity => {
    res.render('celebrities/show', {celebrity});
  })
});


module.exports = router;
