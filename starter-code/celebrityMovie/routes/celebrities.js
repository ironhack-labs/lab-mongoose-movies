const express = require('express');

// require the Drone model here
const Celebrity = require('../models/Celebrity');
const router = express.Router();


router.get('/', (req, res, next) => {  
    Celebrity.find((err, docs) => {
        if (err) {
          next();
          return;
        } else {
            res.render("celebrities/index", {docs:docs})
        }
    });
});
router.post('/', (req, res, next) => {  
    const newCelebrity = new Celebrity(
        {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
        }
      )
  
      newCelebrity.save((err)=>{
      if (err) {
        res.render("celebrities/new")    
      } else{
        res.redirect("/celebrities")
      }
      });
});
router.get('/:id', (req, res, next) => {  
    Celebrity.find({_id:req.params.id},(err, docs) => {
        if (err) {
          next();
          return;
        } else {
            res.render("celebrities/show", {celData:docs[0]})
        }
    });
});
router.post('/:id/delete', (req, res, next) => {  
    Celebrity.findByIdAndRemove(req.params.id,(err, docs) => {
        if (err) {
          next();
          return;
        } else {
            res.redirect("/celebrities")
        }
    });
});
router.get('/:id/edit', (req, res, next) => {  
    Celebrity.findById(req.params.id,(err, docs) => {
        if (err) {
          next();
          return;
        } else {
            res.render("celebrities/edit", {editCel: docs});
        }
    });
});
router.post('/:id', (req, res, next) => {  
      Celebrity.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
        },(err)=>{
      if (err) {
        next();
        return;   
      } else{
        res.redirect("/celebrities")
      }
      });
});
router.get('/new', (req, res, next) => { 
    
    res.render("celebrities/new")
        
});

module.exports = router;
