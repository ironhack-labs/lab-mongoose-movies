const
  express = require('express'),
  router  = express.Router(),
  Celebs  = require(`../models/Celebrity`)
;

router.get(`/celebs`, (req,res) => {
  const
    data = {
      title: `Celebrities`,
      h1: `Celebs`
    }
  ;
  Celebs
    .find()
    .then( celebs => res.render(`celebs/index`, {celebs, data}) )
  ;
});

router.post(`/celebs`, (req,res) => {
  Celebs
    .create(req.body)
    .then( () => res.redirect(`/celebs`) )
  ;
});

router.get(`/celebs/new`, (req,res) => {
  const
    data = {
      title: `Create celeb`,
      h1: `Create new celeb`
    }
  ;
  res.render(`celebs/new`, {data});
});

router.get(`/celebs/:id`, (req,res) => {
  Celebs
    .findById(req.params.id)
    .then( celeb => {
      const
        data = {
          title: celeb.name,
          h1: celeb.name,
        }
      ;
      res.render(`celebs/show`, {celeb, data}) 
    })
  ;
});

router.post(`/celebs/:id`, (req,res) => {
  Celebs
    .findByIdAndUpdate(req.params.id, {$set: req.body})
    .then( () => res.redirect(`/celebs`) )
  ;
});

router.post(`/celebs/:id/delete`, (req,res) => {
  Celebs
    .findByIdAndRemove(req.params.id)
    .then( () => res.redirect(`/celebs`) )
  ;
});

router.get(`/celebs/:id/edit`, (req,res) => {
  Celebs
    .findById(req.params.id)
    .then( celeb => {
      const
        data = {
          title: `Edit celeb`,
          h1: `Edit ${celeb.name}`
        }
      ;
      res.render(`celebs/edit`, {celeb, data}) 
    })
  ;
})

module.exports = router;