const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity.js");

//-------------ROUTING
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((celebResult)=>{
      //res.send(celebResult);

      res.locals.celebrities = celebResult;
      res.render("celebrities/index.hbs")
    })
    .catch((err) => {
      console.log(err)
    }
);
})

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new.hbs")
})

router.post("/process-celebrity", (req, res, next) => {
  //res.send(req.body);
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.create({name, occupation, catchPhrase})
  .then((celebrity) => {
    res.redirect("/celebrities");
  })
  .catch((err) => {next(err)})
});


router.get("/celebrities/:celebID/delete", (req, res, next) => {
  const {celebID} = req.params;
  Celebrity.findByIdAndRemove(celebID)
    .then((celebrity) => {
      res.redirect("/celebrities");
    })
    .catch((err) => {
      next(err);
    })
})


router.get("/celebrities/:celebID", (req, res, next) => {
  const {celebID} = req.params;

  Celebrity.findById(celebID)
    .then((celebrity)=> {
      //res.send(celebrity)

      res.locals.celebrity = celebrity;
      res.render("celebrities/show.hbs")
    })
    .catch((err) => {next(err)})

})



// -------------------Export routes
module.exports = router;
