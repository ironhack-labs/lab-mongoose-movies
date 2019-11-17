const express = require('express');
const router  = express.Router();
const Celebrities = require("../models/Celebrity");

const { check, validationResult } = require('express-validator');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get("/celebrities", (req, res, next) => {
  Celebrities.find()
  .then(celebrities => {
    console.log("Founded celebrities = " + celebrities.length);
    res.render("celebrities/index", {
      celebrities
    })
  })
  .catch(error => {
    console.log('Error while getting the celebrities', error);
    next(error);
  })

});

router.get("/celebrities/new", (req, res) => {
  res.render("celebrities/new")
})

router.get("/celebrities/:id?", (req, res, next) => {
  let celebrityId = req.params.id;

  console.log("given id=" + celebrityId);
  Celebrities.findById(celebrityId)
    .then((celebrity) => {
      res.render('celebrities/show', {celebrity});
    })
    .catch((error) => {
      next(error);
    });
    
});


router.post("/celebrities", [
  check('name').isLength({ min: 1 }),
  check('ocupation').isLength({ min: 1 }),
  check('catchFrase').isLength({ min: 1 })
], (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }
  const celebrity = {
    name : req.body.name,
    ocupation : req.body.ocupation,
    catchFrase : req.body.catchFrase
  };
  Celebrities.create(celebrity)
  .then(celebrityCreated => {
    res.redirect("/celebrities");
  })
  .catch(error => {
    res.render("celebrities/new")
  })

})



module.exports = router;
