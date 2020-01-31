const express = require('express');
const router  = express.Router();

const Celebrity = require('./../models/Celebrity.js');

/* /celebrities/index page */
router.get('/index', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render('celebrities/index', {celebrities});
    })
    .catch(error => {
      console.log("There was an error retrieving the celebrities : ", error);
      next();
    })
});

/* /celebrities/:id page */
router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render('celebrities/show', {celebrity});
    })
    .catch(error => {
      console.log("There was an error retrieving the celebrity : ", error);
      next();
    })
});

/* /celebrities/:id POST data from edit form */
router.post('/:id', (req, res, next) => {

  const newValues = {
    name : req.body.name,
    occupation : req.body.occupation,
    catchPhrase : req.body.catchPhrase,
  }

  Celebrity.findOneAndUpdate({_id : req.params.id}, newValues)
    .then(celebrity => {
      res.redirect('/celebrities/index');
    })
    .catch(error => {
      console.log("There was an error editing the celebrity : ", error);
      next();
    })

});

/* /celebrities/new page */
router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

/* /celebrities/new POST data from form */
router.post('/new', async (req, res, next) => {
  try {
    const newCeleb = {
      name : req.body.name,
      occupation : req.body.occupation,
      catchPhrase : req.body.catchPhrase,
    }

    const newCelebRecord = new Celebrity(newCeleb);
    await newCelebRecord.save()

    res.redirect('index');

  } catch(error) {
    console.log("There was an error saving the new celebrity : ", error);
    res.redirect('new');
  }
});

/* /celebrities/:id/delete POST data from form */
router.post('/:id/delete', async (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(celebrity => {
      console.log("Celebrity was deleted successfully !");
      res.redirect('/celebrities/index');
    })
    .catch(error => {
      console.log("There was an error deleting the celebrity : ", error);
      next();
    })
});

/* /celebrities/new page */
router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render('celebrities/edit', {celebrity});
    })
    .catch(error => {
      console.log("There was an error retrieving the celebrity : ", error);
      next();
    })
});



module.exports = router;
