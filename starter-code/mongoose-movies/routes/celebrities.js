const express = require('express');
const Celebrity = require('../models/celebrity');

const router  = express.Router();

router.get('/', (req, res, next) => {
    Celebrity.find({}, (err, celebrities) => {
      if (err) { return next(err) }
      
      res.render('celebrities/index', {
        celebrities: celebrities
    });
  });
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
})

router.post('/new', (req, res) => {
  const infoCelebrity = {
    name: req.body.name, 
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  };
   
  const newCelebrity = new Celebrity(infoCelebrity);
  newCelebrity.save( (err) => {
      if (err) { res.redirect('/celebrities/new'); }
  
       res.redirect('/celebrities');
       });
})

router.post('/:id/delete', (req, res, next) => {
  
    Celebrity.findByIdAndRemove(req.params.id, (err, celebrities) => {
    if (err) { return next(err) }

    res.redirect('/celebrities');
})
})


router.get('/:id', (req, res, next) => {
    Celebrity.findById(req.params.id, (err, celebrities) => {
    if (err) { return next(err) }

    res.render('celebrities/show', {
      celebrities: celebrities
  });
})
})

router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id, (err, celebrities) => {
  if (err) { return next(err) }

  res.render('celebrities/edit', {
    celebrities: celebrities
  });
})
})

router.post('/:id', (req, res, next) => {
  
  const infoCelebrity = {
    name: req.body.name, 
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  };

  Celebrity.findByIdAndUpdate(req.params.id, infoCelebrity, (err, celebrities) => {
    if (err){ return next(err)}
    return res.redirect('/celebrities');
  })

})


module.exports = router;