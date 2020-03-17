const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(allTheCelebrities => {
    console.log(`Celebrities from DB: `, allTheCelebrities);
    res.render('celebrities/celebrities', {allTheCelebrities});
  })
  .catch(err => {
    console.log(err);
  })

})

router.get('/:id', (req, res, next) => {
  Celebrity.findOne({_id: req.params.id})
  .then(data => {
    console.log('Details: ', data)
    res.render('celebrities/details', data)
  })
  .catch(err => {
    console.log(error);
  })
})

router.post('/add', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body
  Celebrity.create({name, occupation, catchPhrase})
  .then(data =>
    res.redirect("/celebrities"))

  .catch(err => error)
})

router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove({_id: req.params.id})
  .then(data =>
    res.redirect("/celebrities"))

  .catch(err => error)
})

router.get('/:id/edit', function (req, res, next) {
  Celebrity.findOne({ _id: req.params.id }, (err, theCelebrity) => {
    if (err) { 
      return next(err); 
    }
    res.render('celebrities/edit', 
    {title: `Edit ${theCelebrity.name}`, celebrity: theCelebrity});
  });
});

router.post('/:id', function (req, res, next) {
  const actualizacion = {
      name: req.body.name,
      occupation : req.body.occupation,
      catchphrase : req.body.catchphrase
  };
  Celebrity.update({_id: req.params.id}, actualizacion)
      .then(display => res.redirect("/celebrities"))
      .catch(err => console.log(err))
})


module.exports = router;