const express = require('express');
const router = express.Router();
const debug = require("../log")(__filename);

const Celebrity = require("../models/Celebrity");


router.get('/index', (req, res, next) => {

  Celebrity.find().then(celebrities =>{
    //debug(celebrities)
    res.render('celebrities/index', {celebrities});
  })
  .catch(error => console.log(error))
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post("/new", (req, res, next) => {

    const { name, occupation, catchPhrase } = req.body;
  
    const celebrity = new Celebrity({ name, occupation, catchPhrase });
  
    celebrity
      .save()
      .then(celebrity => {
        res.redirect("/celebrities/index");
      })
      .catch(err => {
        res.render("error", err);
      });
});


router.get("/:id", (req, res, next) => {

  Celebrity.findById(req.params.id)
  .then(celebrity_detail => {
    //debug(celebrity_detail)
    res.render("celebrities/show", {celebrity_detail});
  })
  .catch(error => console.log(error));
});






module.exports = router;