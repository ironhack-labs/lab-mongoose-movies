const express = require('express');
const router = express.Router();
const debug = require("../log")(__filename);

const Celebrity = require("../models/Celebrity");

router.get('/', (req, res, next) => {
  Celebrity.find().then(celebrities =>{
    //debug(celebrities)
    res.render('celebrities/index', {celebrities});
  })
  .catch(error => console.log(error))
});

router.get("/:id", (req, res, next) => {

  Celebrity.findById(req.params.id)
  .then(celebrity_detail => {
    debug(celebrity_detail)
    res.render("celebrities/show", {celebrity_detail});
  })
  .catch(error => console.log(error));
});





module.exports = router;