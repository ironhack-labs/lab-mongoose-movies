var express = require('express');
var router = express.Router();
var Celeb = require("../models/celeb.js");

router.get('/celebs', function(req, res, next) {
  Celeb.find({}, (err, celebs)=> {
    if(err) return next(err);
    res.render("celebs/index", {celebs:celebs});
  })
});

router.get('/celebs/new', function(req, res, next) {
  res.render("celebs/new");
});

router.post('/celebs', function(req, res, next) {
  (new Celeb({
    name:req.body.name,
    occupation:req.body.occupation,
    catchPhrase:req.body.catchPhrase
  })).save(err=>{
    if(err) return next(err);
    return res.redirect("celebs");
  });
});

router.get('/celebs/:id/edit', function(req, res, next) {
  Celeb.findById(req.params.id, (err, celeb)=>{
    if(err) return next(err);
    res.render("celebs/edit", {celeb:celeb});
  })
});

router.post('/celebs/:id/edit', function(req, res, next) {
  Celeb.findByIdAndUpdate(req.params.id, {
      name:req.body.name,
      occupation:req.body.occupation,
      catchPhrase:req.body.catchPhrase
    }, 
    (err, celeb)=>{
      if(err) return next(err);
      return res.redirect("/celebs");
  });
});

router.get('/celebs/:id/delete', function(req, res, next) {
  Celeb.findByIdAndRemove(req.params.id, err=>{
      if(err) return next(err);
      return res.redirect("/celebs");
  });
});

router.get('/celebs/:id', function(req, res, next) {
  Celeb.findById(req.params.id, (err, celeb)=>{
    if(err) return next(err);
    res.render("celebs/show", {celeb:celeb});
  });
});



module.exports = router;
