const express = require('express');
const router = express.Router();
const debug = require("../log")(__filename);

const Celebrity = require("../models/Celebrity");

router.get('/', (req, res, next) => {

  Celebrity.find().then(celebrities =>{
    //debug(celebrities)
    res.render('../views/celebrities/index', {celebrities});
  })
  .catch(error => {
    console.log(error)
  })
});

module.exports = router;