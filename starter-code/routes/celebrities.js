const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/', (req, res) => {
  Celebrity.find({})
    .then( celebrities => {

      console.log(celebrities); <----vacío!!!

      const data = {
        title: "Celebrities",
        celebrities: celebrities
      };
      res.render("celebrities/index", data);
    })
    .catch( err => console.log(err));
})

module.exports = router;