
const express = require('express');
const router  = express.Router();

// router.use('/celebrities', require('./celebrities'))
const Celebrity = require("../models/celebrity.js")

    router.get("/celebrities", (req, res, next)=> {
      Celebrity.find()
        .then(celebR => {
          res.locals.celebArray= celebR;
          res.render("celebrities/index.hbs");
        })
        .catch(err => next(err))
    });


    router.get('/celebrities/show/:celebId', (req, res, next) =>{
      const {celebId} = req.params;                                    

      Celebrity.findById(celebId)
        .then(data => {
          res.locals.oneCeleb = data;
          res.render("celebrities/show.hbs")
        })
        .catch(err => next(err));
    });

    router.get('/celebrities/new', (req, res, next) => {
      res.render('celebrities/new.hbs')
    });

    router.post('/celebrities/process-create', (req, res , next) => {
      const {name, occupation, catchPhrase} = req.body;
      Celebrity.create({name, occupation, catchPhrase})
        .then(data => {
          res.redirect('/celebrities');
        })
        .catch(err => {
          console.log("REDIRECT FAILED", err);
          res.redirect("/celebrities/new")
        })
    })


module.exports = router;

