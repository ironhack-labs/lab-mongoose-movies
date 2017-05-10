var express = require('express');
var router = express.Router();
const Celebrity = require('../models/celebrity');



router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) next(err);
     else res.render('celebrities/index', {celebrities});
  });
});

router.get('/new', (req, res, next)=> {
  res.render("celebrities/new");
});

router.post('/', (req, res, next)=> {
  const celebInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  const newCeleb = new Celebrity(celebInfo);
  newCeleb.save();
  res.redirect("/celebrities");
});

router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id, (err, celebrity)=> {
    if(err) next(err);
    res.render("celebrities/show", {celebrity});
  });
});

router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id, (err, celebrity)=> {
    if(err) next(err);
    res.render("celebrities/edit",  {celebrity});
  });
});

router.post('/:id', (req, res, next) => {
  const celebInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  Celebrity.findByIdAndUpdate(req.params.id, celebInfo, (err, celebrity) => {
    if (err) next(err);
    res.redirect('/celebrities');
  });
});


router.get('/:id/delete', (req, res, next) => {
  Celebrity.deleteOne({_id: req.params.id}, (err)=> {
    if(err) next(err);
    res.redirect("/celebrities");
  });
});

module.exports = router;
