const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity.js'); 



router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new-celebrity')
})


router.post('/celebrities/create', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({name, occupation, catchPhrase});
  newCelebrity.save()
  .then(() => {
    res.redirect('/celebrities');
  })
  .catch(error => {
    res.render('celebrities/new-celebrity')
  });
});

router.get('/celebrities', (req, res, next) => {
  // res.send("Hello")

   Celebrity.find()
   .then(allCelebsFromDB => {
     res.render('celebrities/celebrities',{allCelebrities: allCelebsFromDB}) 
   })
   .catch(error => {
     next(error)
   })
})

module.exports = router;
