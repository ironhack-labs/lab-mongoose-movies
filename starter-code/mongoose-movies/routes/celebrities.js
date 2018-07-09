const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then((listOfCelebrities) =>{
    res.render('celebrities/index', {listOfCelebrities});
  })
  .catch((err) => {
    next(err);
  });
});

router.get('/celebrities/new', (req, res, next) =>{
  res.render('celebrities/new');
});

router.post('/celebrities/create', (req, res, next)=>{
   const newCelebrity = new Celebrity({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  });

  newCelebrity.save()
  .then((response)=>{
    res.redirect('/celebrities');
  })
  .catch((err)=>{
    next(err);
  });

});

//    const newBook = new Book(req.body)
// ^ this is super fancy mode, use if you dare
router.get('/celebrities/:id', (req, res, next)=>{
  const theID = req.params.id;
  Celebrity.findById(theID)
  .then((theCelebrity)=>{
    res.render('celebrities/show', {Celebrity: theCelebrity});
  })
  .catch((err)=>{
    res.send(err);
  });
});





module.exports = router;
