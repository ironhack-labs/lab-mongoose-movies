const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');




router.get('/', (req, res, next) => {
    Celebrity.find().exec((err, celebrities) => {
        
        res.render('celebrities/index', {celebrities});
        
        
       
       
    });
});


router.get('/celebrities/:id', (req,res) => {
    const celebId = req.params.id;
  console.log(req.params)
    Celebrity.findById(celebId, (err, celebrities) => {
      if (err) { return next(err); }
      res.render('celebrities/detail', { celebrities: celebrities, });
      console.log({ celebrities });
        
      })
});
    //create form
router.get('/new', (req, res) => {
    res.render('celebrities/new');
});
//recoge los datos del form y los mete en las celebrities page
router.post('/new', (req, res) => {
    const {name,occupation,catchPhrase} = req.body;
    const celeb = new Celebrity({ name, occupation, catchPhrase });
    console.log(celeb);
    celeb.save( err => {
      if (err) { return next(err) }
      res.redirect('/');
    })
});
  //Delete a celeb
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
  
    Celebrity.findByIdAndRemove(id, (err, celebrities) => {
      if (err){ return next(err); }
      return res.redirect('/');
    });
  });
  
  router.get('/detail/:id/edit', (req,res) => {
    const celebId = req.params.id;
    Celebrity.findById(celebId, (err, celebrities) => {
      if (err) { return next(err); }
      res.render('celebrities/edit', { celebrities: celebrities });
    });
  })
  
  
  /* CRUD -> UPDATE DATABASE */
  router.post('/detail/:id/edit', (req,res) => {
    const celebId = req.params.id;
    const {name,occupation,catchPhrase} = req.body;
    const updates = {name,occupation,catchPhrase};
  
    Celebrity.findByIdAndUpdate(celebId, updates, (err, celebrities) => {
      if (err){ return next(err); }
      return res.redirect('/');
    });
  })
  
  

  
module.exports = router;