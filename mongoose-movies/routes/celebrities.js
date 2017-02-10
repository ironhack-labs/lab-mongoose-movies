const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrities');

router.get('/', (req, res, next) => {
  Celebrity.find({}, (error, celebrities) => {
    if (error) {
      next(error);
    } else {
      res.render('celebrities/index', {celebrities});
    }
  });
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id, (error, celebrities) => {
    if(error) {
      next(error);
    } else {
      res.render('celebrities/show', {celebrities});
    }
  });
});

router.post('/', (req, res, next) => {
  const celebrityInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  const newCelebrity = new Celebrity(celebrityInfo);

  newCelebrity.save((err) => {
    if (err) {
      return next(err);
    } else res.redirect('/celebrities');
  });
});

router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id, (err, celebrity) => {
    if(err) {
      return next(err);
    } else {
      return res.redirect('/celebrities');
    }
  });
});

router.get('/:id/edit', (req,res, next) => {
  Celebrity.findById(req.params.id, (err, celebrity) => {
    if (err) {
      next(error);
    } else {
      res.render('celebrities/edit', {celebrity});
    }
  });
});

router.post("/:id", (req, res, next) => {
  let edittedCelebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  Celebrity.updateOne({"_id":req.params.id}, edittedCelebrity, (err, celebrity) => {
    if(err) {
      next(err);
    } else {
      res.redirect('/celebrities');
    }
  });
});




module.exports = router;
