const express = require('express');
const router  = express.Router();
const celebrities = require('../models/celebrities')
/* GET home page */
router.get('/celebrities/index', (req, res, next) => {
  celebrities.find()
    .then((theCelebsFromDB)=>{
      res.render('celebrities/index', {allCelebs: theCelebsFromDB})
    })
    .catch((err)=> {
      next(err)
    })
 
});

router.get('/celebrities/:id', (req, res, next) => {
  celebrities.findById(req.params.id)
    .then((singleCeleb)=>{
      res.render('celebrities/detailedPage', {oneCeleb: singleCeleb})
    })
    .catch((err)=> {
      next(err)
    })
 
});

router.get('/celebrities/create/new', (req, res, next) => {
  res.render('celebrities/newCeleb')
});

router.post('/celebrities', (req, res, next) => {
  celebrities.create(req.body)
    .then(()=> {
      req.flash('success', 'New celebrity added successfully')
      res.redirect('/celebrities/index')
    })
    .catch(err=> {
      next(err);
    })
})


router.post('/celebrities/:id/delete', (req, res, next)=>{
  celebrities.findByIdAndRemove(req.params.id)
    .then(()=>{
      req.flash('success', 'Celebrity removed successfully');
      res.redirect('/celebrities/index');
    })
    .catch((err)=>{
        next(err);
    })
})

router.get('/celebrities/:id/edit', (req,res, next) => {
  celebrities.findById(req.params.id) 
    .then((hotFromDB) => {
      res.render('celebrities/edit', {celebToEdit: hotFromDB})
    })
    .catch((err)=>{
      next(err);
  })
})

router.post('/celebrities/:id', (req,res, next) => {
  celebrities.findByIdAndUpdate(req.params.id, req.body) 
    .then(() => {
      req.flash('success', 'Celebrity modified successfully');
      res.redirect('/celebrities/'+req.params.id)
    })
    .catch((err)=>{
      next(err);
  })
})


module.exports = router;