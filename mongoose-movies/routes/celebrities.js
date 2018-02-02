const express = require('express');
const Celebrity = require('../models/celebrity');

const router  = express.Router();

router.get('/celebrities', (req, res, next) => {
    Celebrity.find({}, (err, celebrities) => {
        if (err) { return next(err); }
    
        res.render('celebrities/index', {
          celebrities: celebrities
        });
      });
});

router.get('/celebrities/new', (req, res, next) => {
      res.render('celebrities/new');
});

router.get('/celebrities/:id/edit', (req, res, next) => {
  const celebrityId = req.params.id
  Celebrity.findById(celebrityId, (err, celebrities) => {
    if (err) { 
      return next(err); 
    }
    res.render('celebrities/edit', {
      celebrities: celebrities
    });
  });
})

router.get('/celebrities/:id', (req, res, next) => {
  const celebrityId = req.params.id

  Celebrity.findById(celebrityId, (err, celebrities) => {
      if (err) { 
        return next(err); 
      }

      res.render('celebrities/show', {
        celebrities: celebrities
      });
    });
});




router.post('/celebrities', (req, res, next) => {
  let newCeleb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }

  let celeb = new Celebrity(newCeleb)
  celeb.save((err, docs) => {
    if (err) {
     next(err)
    }
    else {
      res.redirect('/celebrities')
    }
  })
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  const celebrityId = req.params.id
  Celebrity.findByIdAndRemove(celebrityId, (err, celebrities) => {
    if (err) {
      return next(err);
    }

    res.redirect('/celebrities');
  });
})


router.post('/celebrities/:id', (req, res, next) => {
  let updatedCeleb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }
  let celebIDtoUpdate = req.params.id
  Celebrity.findByIdAndUpdate(
    celebIDtoUpdate,
    updatedCeleb,
    (err, data) => {
    if (err) {
      next()
    }
    res.redirect('/celebrities')
  })
})
module.exports = router;