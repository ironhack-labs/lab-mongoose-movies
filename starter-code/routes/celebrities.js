const express = require('express');
const router = express.Router();
const Celebrity = require("../models/Celebrity.model")

/* Celebrities */
router.get('/celebrities/index', (req, res, next) => {
  Celebrity.find()
   .then((celebrities) => {
      res.render("celebrities/index", { celebrities });
    })
    .catch((e) => next(e));
})

/* Add celebrities */
router.get('/celebrities/new', (req, res, next) => {
  res.render("celebrities/new")
})

router.post('/celebrities/new', (req, res, next) => {
  const celebrity = new Celebrity (req.body)
  celebrity.save()
  .then(c => res.redirect("/celebrities/index"))
  .catch(e => res.redirect("/celebrities/new"))
})

/* Edit celebrities */
router.get('/celebrities/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then((celebrity) => {
    res.render ('celebrities/new', celebrity)
  })
  .catch((e) => next(e))
})

router.post('/celebrities/:id/edit', (req, res, next) => {
  const celebrity = req.body
  Celebrity.findByIdAndUpdate(req.params.id, celebrity, { new: true })
  .then((c) => res.render('celebrities/show', c))
  .catch((e) => next(e))
})

/* Delete celebrities */
router.post('/celebrities/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/celebrities/index"))
    .catch((e) => next(e))
})

/* Celebrities details */
router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((celebrity) => {
    res.render ("celebrities/show", celebrity)
    })
    .catch((e) => next(e))
})

module.exports = router;