const router = require('./index');
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');


router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
    .then(celebrities => {
      res.render('celebrities/index', { celebrities })
    })
    .catch(e => console.log(e))
})

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new')
})


router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById({ _id: req.params.id })
    .then(celebrity => res.render('celebrities/show', { celebrity }))
    .catch(e => console.log(e))
})

router.post('/celebrities', (req, res, next) => {
  let data = req.body;
  let celebrity = new Celebrity({ name: data.name, occupation: data.occupation, catchPhrase: data.catchPhrase });
  celebrity.save()
    .then((celebrity) => res.redirect('/celebrities'))

    .catch(() => res.render('/celebrities/new'))
})


module.exports = router;
