const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then((celebrities) => {
    res.render('../views/celebrities/index', {celebrities});
  })
  .catch((e) => next(e));
})

router.post('/celebrities/:id/delete', (req, res, next) => {
  const celebrity = req.body;
  console.log(celebrity._id);
  Celebrity.findOneAndRemove({ _id: celebrity._id })
  .then(() => {
    res.redirect('/celebrities');
  })
  .catch((e) => next(e));
})

router.post('/celebrities/:id', (req, res, next) => {
  const celebrity = req.body;
  Celebrity.findByIdAndUpdate(req.body._id, celebrity, { new: true })
  .then((c) => {
    let route = '/celebrities/'+celebrity._id;
    return route
  })
  .then((route) => {
    res.redirect(route);
  })
  .catch((e) => next(e));
})

router.post('/celebrities', (req, res, next) => {
  const celebrity = req.body;
  Celebrity.create(celebrity)
  .then(() => {
    return Celebrity.find({name: req.body.name})
    })
  .then((c) => {
    let route = '/celebrities/'+c[0]._id;
    return route
  })
  .then((route) => {
    res.redirect(route);
  })
  .catch((e) => next(e));
})


router.get('/celebrities/new', (req, res, next) => {
  res.render('../views/celebrities/new')
})

router.get('/celebrities/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then((celebrity) => {
    res.render('../views/celebrities/edit', {celebrity});
  })
  .catch((e) => next(e));
})

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then((celebrity) => {
    res.render('../views/celebrities/show', {celebrity});
  })
  .catch((e) => next(e));
})

module.exports = router;
