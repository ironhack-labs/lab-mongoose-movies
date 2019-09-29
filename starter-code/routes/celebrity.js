const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');

/* GET home page */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then(celebrity => {
    res.render('celebrities/index', { celebrity });
  })
  .catch(error => {throw new Error(error)})
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new')
})

router.get('/celebrities/:id', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
  .then(celebrity => {
    console.log(celebrity);    
    res.render('celebrities/show', celebrity);
  })
  .catch(error => {throw new Error(error)})
});

router.post('/celebrities', (req, res, next) => {
  const { name, ocupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, ocupation, catchPhrase })
  newCelebrity.save()
    .then((celebrity) => {
      console.log(celebrity);      
      res.redirect('celebrities')
    })
    .catch((error) => {
      res.redirect('celebrities/new')
      throw new Error(error);
    })
})

router.post('/celebrities/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findByIdAndRemove(id)
  .then((celebrity) => {
    console.log(celebrity);    
    res.redirect('../../celebrities');
  })
  .catch(error => {throw new Error(error)});
});

router.get('/celebrities/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
  .then((celebrity) => {
    res.render('celebrities/edit', celebrity)
  })
  .catch(error => {throw new Error(error)});
})

router.post('/celebrities/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, ocupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(id, { name, ocupation, catchPhrase })
  .then((celebrity) => {
    res.redirect("../celebrities")
  })
  .catch(error => {throw new Error(error)});
})

module.exports = router;