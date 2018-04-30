const Celebrity = require('../models/celebrity');
const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  Celebrity.find({}, function(err, celebrity) {
    console.log({celebrity});
    res.render('celebrities/index', {celebrity})
    console.log("There is an error:", err);
  });
});

router.get('/:id', (req, res) => {
  const theId = req.params.id;
  Celebrity.findById(theId, function(err, celebrity) {
    res.render('celebrities/show', {celebrity})
    console.log("There is an error:", err);
  });
});

// Showing the /show page instead of /new
router.get('/new', (req, res) => {
  res.render('/celebrities/new/')
})

router.post('/create', (req, res) => {
  const newCelebrity = new Celebrity ({
    name : req.body.theName,
    occupation: req.body.theOccupation,
    catchPhrase: req.body. thePhrase
  })
  newCelebrity.save()
  .then(celebrity => {
  })
  .catch(theError => {res.redirect('/celebrities/new/') })
res.redirect('/celebrities')
})

router.post('/:id/delete', (req, res) => {
  const celebrityId = req.params.id;
  const theCelebrity = Celebrity.findByIdAndRemove(celebrityId)
  .then(celebrity => {
  })
  .catch(error => {
    console.log(error);
  })
  res.redirect('/celebrities')
})

module.exports = router;