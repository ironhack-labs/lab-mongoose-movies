const express = require('express');
const router = express.Router();
const celebrityModel = require('./../models/Celebrity');

router.get('/', (req, res, next) => {
   celebrityModel
      .find()
      .then((celebrities) => res.render('celebrities/index', { celebrities }))
      .catch(next);
});

router.get('/new', (req, res, next) => {
   res.render('celebrities/new');
});

router.post('/new', (req, res, next) => {
   const { name, occupation, catchPhrase } = req.body;
   celebrityModel
      .create(req.body)
      .then(() => res.redirect('/'))
      .catch(() => res.redirect('/new'));
});

router.get('/:id', (req, res, next) => {
   celebrityModel
      .findById(req.params.id)
      .then((oneCelebrity) => res.render('celebrities/show', oneCelebrity))
      .catch(next);
});

router.post('/:id/delete', (req, res, next) => {
    celebrityModel
    .findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/celebrities'))
    .catch(next);
});

router.get("/:id/edit", async (req, res,next) => {
   celebrityModel.findById(req.params.id)
   .then(celebrityToUpdate => res.render("celebrities/edit", celebrityToUpdate))
   .catch(next)
});

router.post("/:id/edit", (req, res,next) => {
   celebrityModel.findByIdAndUpdate(req.params.id, req.body)
   .then(()=>res.redirect("/celebrities"))
   .catch(next)
}); 

module.exports = router;
