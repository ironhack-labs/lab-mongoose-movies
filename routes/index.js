const express = require('express');
const router  = express.Router();
const Celebrity     = require('../models/celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');
  });

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then((theCelebrity)=>{
        res.render('celebrities', {theCelebrity});
    })
    .catch((err)=>{
        next("error"); 
     })
  });

  router.get('/celebrities/:id', (req, res, next) => {
    let id = req.params.id;
    Celebrity.findOne({'_id': id})
      .then(celebrity => {
        res.render("celebrityDetails", { celebrity })
      })
      .catch(error => {
        console.log(error)
      })
  }); 
  
  router.get('/celebrities/:id/edit', (req, res, next)=>{
    let id = req.params.id;
    Celebrity.findById(req.params.id)
    .then((celebrity)=>{
        res.render('editCelebrity', {celebrity})
    })
    .catch((err)=>{
        next(err);
    })
})
module.exports = router;
