const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity");



router.get('/', (req, res, next) => {

  Celebrity.find()
  .then((celebrities) => {
      console.log(celebrities);
    res.render('Celebrities/index', {celebrities});
  })
  .catch(err => {
    console.log(err);
    next();
  });
});
router.get('/:id', (req, res, next) => {

  Celebrity.findById(req.params.id)
  .then((celebrity) => {
      
    res.render('Celebrities/show', {celebrity});
  })
  .catch(err => {
    console.log(err);
    next();
  });
});



router.get('/new', (req, res, next) => {
  console.log(req.query);
  if(req.query.error) {
    res.render('Celebrities/new', {error: 'An error has occurred'});
  }
  res.render('Celebrities/new');
    
  
});

router.post('/', (req, res, next) => {
  console.log(req.body);

  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
  .then(createdCelebrity => {
    res.redirect("/celebrities");
  })
  .catch(error => {
    res.redirect("celebrities/new?error=error");
  })
  

});

router.post('/:id/delete', (req, res, next) => {
  
  Celebrity.findByIdAndDelete(req.params.id)
  .then(deleteCelebrity => {
    res.redirect("/celebrities");
  })
  .catch(error => {
    console.log(error);
    next();
    res.redirect("/celebrities");
  })
  

});

router.get('/:id/edit', (req, res, next) => {
  
  Celebrity.findById(req.params.id)
  .then(selectedCelebrity => {
    res.render("Celebrities/edit", {selectedCelebrity});
  })
  .catch(error => {
    console.log(error);
    next();
    res.redirect("/celebrities");
  })
  

});

router.post('/edit', (req, res, next) => {
  
  Celebrity.findByIdAndUpdate(req.body._id, req.body)
  .then(updatedCelebrity => {
    res.redirect("/celebrities");
  })
  .catch(error => {
    console.log(error);
    next();
    res.redirect("/celebrities");
  })
  

});

module.exports = router;