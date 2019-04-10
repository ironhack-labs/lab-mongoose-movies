const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity.model');

//list
router.get('/', (req, res, next) => {
    Celebrity.find()
      .then(celebrities => res.render('celebrities/index', { celebrities }))
      .catch(error => next(error));
});

//create & doCreate
router.get('/new', (req, res, next) => {
    res.render('celebrities/new' )
});

router.post('/', (req, res, next) => {
    const celebrity = new Celebrity(req.body)
  
    celebrity.save()
      .then(() => res.redirect("/celebrities"))
      .catch((error) => {
        if (error instanceof mongoose.Error.ValidationError) {
          res.render('celebrities/new', { celebrity, ...error})
        } else{
          next(error)
        }
      });
});

//edit & doEdit
router.get('/:id/edit', (req, res, next) => {
    const id = req.params.id;

    Celebrity.findById(id)     
        .then(celebrities => res.render('celebrities/:id/edit', { celebrity, celebrities }))
        .catch(error => next(error));
});

router.post('/:id', (req, res, next) => {
    const id = req.params.id;
  
    Celebrity.findByIdAndUpdate(id, req.body, { new: true})
      .then(celebrity => res.redirect(`/celebrities/${celebrity._id}`))
      .catch(error =>  next(error))
});


//delete
router.post('/:id/delete', (req, res, next) => {
    const id = req.params.id;
  
    Celebrity.findByIdAndRemove(id)
        .then(() =>  res.redirect('/celebrities'))
        .catch(error => next(error))
});

//show
router.get('/:id', (req, res, next) => {
    const id = req.params.id;

    Celebrity.findById(id)     
        .then(celebrities => res.render('celebrities/show', { celebrity, celebrities }))
        .catch(error => next(error));
});

module.exports = router;