const express = require('express');
const Celebrity = require('../models/Celebrity.model');
const router  = express.Router();

router.get('/index', (req, res, next) => {
    Celebrity.find()
    .then(celebsFromDB => {
      //console.log(celebsFromDB);
      res.render('celebrities/index', {celebsFromDB});
    })
    .catch( err => {
      next(err);
    })
});

router.get('/new', (req, res) => {
  res.render('celebrities/new');
});

router.post('/', (req, res, next) => {
    
  const newCeleb = new Celebrity(req.body);
  console.log(newCeleb);

  newCeleb.save()
  .then(createdCeleb => {
      console.log("Document created: ", createdCeleb);
      res.redirect('celebrities/index');
  })
  .catch(err => {
      console.log(err);
      res.redirect('celebrities/new');
  });
});


router.get('/:celebrityID', (req, res, next) => {
    Celebrity.findById(req.params.celebrityID)
    .then( celebrityDetails => {
        res.render("celebrities/show", {celebrityDetails});
    })
    .catch(err => {
        next(err);
    });
});

router.get('/:celebrityID/edit', (req, res, next) => {
  Celebrity.findById(req.params.celebrityID)
  .then( celebrityFromDB => {
    console.log(celebrityFromDB)
      res.render("celebrities/edit", celebrityFromDB);
  })
  .catch(err => {
    next(err);
  })
});

router.post('/:celebrityID', (req, res, next) => {


  let query = {_id: req.params.celebrityID}

  let {name, occupation, catchPhrase} = req.body;
  let doc = {name, occupation, catchPhrase};

  console.log()

 Celebrity.update(query, doc)
  .then(editedCelebrity => {
    console.log("Succesfully updated", editedCelebrity);
    res.redirect('/celebrities/index');
  })
  .catch(err => next(err))
})

router.post('/:celebrityID/delete', (req, res, next) => {

  //console.log(req.params.celebrityID);
  //the lab tells to use finfByIdAndRemove, but there's a deprecation warning, so I used findByIdAndDelete()
   Celebrity.findByIdAndDelete(req.params.celebrityID)
   .then(removedElement => {
     console.log("Removed from DB: ", removedElement._id);
     res.redirect('/celebrities/index');
   })
   .catch(err => {
     next(err);
   })
}
);


module.exports = router;