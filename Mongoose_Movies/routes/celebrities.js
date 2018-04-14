const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity');



// Display all celebrities
router.get('/', (req, res, next)  => {
  Celebrity.find({}, (error, celebs) => {
    if (error) {
      return next(error);
    } else {
      // console.log(celebs);
      res.render('celebrities/index', {celebs});
    }
  });
});


//Add a new celebrity
router.get('/new', (req, res, next)  => {
      res.render('celebrities/new');
});

router.post('/new', (req, res, next)  => {
  let newinfo = {
    name: req.body.name,
    ocupation: req.body.ocupation,
    catchPhrase: req.body.catchPhrase,
  };
  let newCelebrity = new Celebrity(newinfo);
  newCelebrity.save( (err, celeb) => {
    if (err) {
      return next(err);
    } else {
      res.redirect('/celebrities');
    }
  });
});



//show one celebrity
router.get('/:id', (req, res, next)  => {
  let celebID = req.params.id;
  Celebrity.findById(celebID, (err, celebs) => {
    if (err) {
      return next(err);
    } else {
      // console.log(celebs);
      res.render('celebrities/show', {celebs});
    }
  });
});


//delete a celebrity
router.post('/:id/delete', (req, res, next)  => {
  let celebID = req.params.id;
  Celebrity.findByIdAndRemove(celebID, (err, celebrity) => {
    if (err) { 
      return next(err); 
    } else{
    return res.redirect('/celebrities');
    }
  });
});


//Update a celebrity status
router.get('/:id/edit', (req, res, next)  => {
  let celebID = req.params.id;
  Celebrity.findById(celebID, (err, celebrity) => {
    if (err) { 
      return next(err); 
    } else{
      console.log(celebrity);
    return res.render('celebrities/edit', {celebrity});
    }
  });
});

router.post('/:id/edit', (req, res, next) => {
  // console.log("entraaa!!!");
  const celebID = req.params.id;
  const updates = {
    name: req.body.name,
    ocupation: req.body.ocupation,
    catchPhrase: req.body.catchPhrase, 
  };

  Celebrity.findByIdAndUpdate(celebID, updates, (err, celeb) => {
    if (err) {
      next(err);
    } else {
      res.redirect(`/celebrities/${celeb._id}`);
    }
  });
});




module.exports = router;