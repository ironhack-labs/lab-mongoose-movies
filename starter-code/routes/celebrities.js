const express = require('express');
const router  = express.Router();

const Celebrity = require("../models/celebrity");

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then( celebrities =>{
      res.render('celebrities/index', {celebrities});
    })
    .catch(err => {
      return next(err);
    })
});

router.get('/celebrities/new', (req, res) => {
  console.log("Aqui anda entrando");
  res.render('celebrities/new');
});

router.post("/celebrities", (req, res, next) => {
  const { name, occupation, catch_phrase } = req.body;

  const newCelebrity = new Celebrity({ name, occupation, catch_phrase });
  newCelebrity.save()
  .then(celebrity => {
    res.redirect("/celebrities");
  })
  .catch(err => {
    res.redirect("/celebrities/new");
  })
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(details => {
    res.render("celebrities/show", { details });
  })
  .catch(err => {
    return next(err);
  })
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
  .then(() => {
    res.redirect("/celebrities");;
  })
  .catch((err)=>{
    return next(err);
  })
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(details => {
    res.render("celebrities/edit", { details });
  })
  .catch((err)=>{
    return next(err);
  })
});

router.post("/celebrities/:id", (req, res) => {
  const { name, occupation, catch_phrase } = req.body;
  const updates = { name, occupation, catch_phrase };
  Celebrity.findByIdAndUpdate(req.params.id, updates)
  .then(() => {
    res.redirect("/celebrities");
  })
  .catch((err)=>{
    return next(err);
  })
});

module.exports = router;