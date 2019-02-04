
const express = require("express");
const router = express.Router();
const mCelebrities = require("../models/celebrity")




router.get('/celebrities', (req, res, next) => {
  mCelebrities.find()
    .then(allCelebrities => {
      res.render('celebrities', { allCelebrities });
    })
    .catch((error) => {
      console.log(error);
      next();
    });
});

router.get('/celebrities/:id', (req, res, next) => {
  mCelebrities.findById(req.params.id)
      .then(oneCeleb => {
        res.render("celebrities/show", {oneCeleb});
      })
      .catch(err => {
        console.log(err);
        next();
  });
})

router.get('/celebrities/new', (req, res, next) => {
  res.render("celebrities/new")
})

router.post('/celebrities', (req, res, next) => {
  console.log(req.body)
  const sumCelebrities = {
    name: req.body.celebName,
    occupation: req.body.celebOccupation,
    catchPhrase: req.body.celebPhrase
  }

  const newcelebrities = new mCelebrities(sumCelebrities);

  newcelebrities.save()

    .then(() => {
      
      res.redirect('/celebrities/')
    })
    .catch(err => {
   
      res.render("celebrities/new");
    })
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  mCelebrities.findByIdAndRemove(req.params.id)
      .then(() => {
        res.redirect('/celebrities/')
      })
      .catch(err => {
        console.log(err);
        next();
  });
})

router.get('/celebrities/:id/edit', (req, res, next) => {
  mCelebrities.findById(req.params.id)
    .then(editCelebrites => {
      res.render('celebrities/edit', {editCeleb})
    })
    .catch(err => {
      console.log(err);
    })
})

router.post('/celebrities/:id', (req, res, next) => {
  mCelebrities.update({_id:req.params.id}, { $set: {name: req.body.celebName, occupation: req.body.celebOccupation, catchPhrase:req.body.celebPhrase }})
      .then(() =>{
        res.redirect('/celebrities')
      })
      .catch(err => {
        console.log(err);
        next();
      });
})

module.exports = router;