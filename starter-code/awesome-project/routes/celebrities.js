
const express = require("express");
const router = express.Router();
//const debug = require("../log")(__filename);

const Celebrity = require("../models/Celebrity");

router.get('/', (req, res, next) => {
  
  Celebrity.find().then(celebrities =>{
    res.render('celebrities', {celebrities});
  })
});


module.exports = router;