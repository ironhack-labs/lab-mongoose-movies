const express = require('express');
const Celebrity = require('../models/celebrity');
const router  = express.Router();

//route for the celebrities page
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((celebrityfromDb)=>{
      res.locals.celebrityList = celebrityfromDb;
      res.render('celebrities/index');
    })
    .catch((err)=>{
      next(err);
    });
});


//route to add celebrity
router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/process-celeb', (req, res, next) =>{
  const { name, occupation, catchPhrase} = req.body;
  Celebrity.create({ name, occupation, catchPhrase})
    .then(()=>{
      res.redirect('celebrities');
    })
    .catch((err)=>{
      next(err);
    });
});

//route for delete button
router.get('/celebrities/:celebId/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.celebId)
    .then(()=>{
      res.redirect('/celebrities');
    })
    .catch((err)=>{
      next(err);
    });
});

//Editing route
router.get('/celebrities/:celebId/edit', (req, res, next) =>{
  Celebrity.findById(req.params.celebId)
    .then((celebrityDetails)=>{
      res.locals.celebId = req.params.celebId;
      res.locals.celeb = celebrityDetails;
      res.render('celebrities/edit')
    })
    .catch((err)=>{
      next(err);
    });
});


router.post('/process-edit/:celebId', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;

  Celebrity.findByIdAndUpdate(
    req.params.celebId,
    {name, occupation, catchPhrase},
    {runValidators: true}
  )
    .then(()=>{
      // res.redirect(`/celebrities/${req.params.celebId}`)
      res.redirect(`/celebrities`);
    })
    .catch((err) =>{
      next(err);
    });
    //res.send(req.body)
});

///////////////////////////////////////////////////////////////////////



//route for celebrity detail show.hbs
router.get('/celebrities/:celebId', (req, res, next) => {
  Celebrity.findById(req.params.celebId)
    .then((celebrityDetails)=>{
      res.locals.celeb = celebrityDetails;
      res.render('celebrities/show');
    })
    .catch((err)=>{
      next(err);
    });
});



module.exports = router;
