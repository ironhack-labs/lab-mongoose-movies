const express = require('express');
const router = express.Router();


const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

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

router.get('/celebrities/editCeleb/:celebId', (req, res, next)  =>{
  const id = req.params.celebId;
  Celebrity.findById(id)
  .then(aCelebrity => {
    res.render('celebrities/editCeleb', {celebrity: aCelebrity});
  })
  .catch((err)=>{
    next(err);
  });
});

router.post('/celebrities/:id/delete', (req, res, next)=>{
  Celebrity.findByIdAndRemove(req.params.id)
  .then((response)=>{
    res.redirect('/celebrities');
  })
  .catch((err)=>{
    next(err);
  });
});

// "/celebrities/editCeleb/{{celebrity._id}}"
router.post('/celebrities/editCeleb/:celebId', (req, res, next) =>{
  const id = req.params.celebId;
  const editedCeleb = {
    name: req.body.editName,
    occupation: req.body.editOccupation,
    catchPhrase:  req.body.editCatchPhrase
  };
  Celebrity.findByIdAndUpdate(id, editedCeleb)
  .then( () =>{
    res.redirect(`/celebrities/${id}`);
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
    res.render('celebrities/show', {celebrity: theCelebrity});
  })
  .catch((err)=>{
    res.send(err);
  });
});



module.exports = router;
