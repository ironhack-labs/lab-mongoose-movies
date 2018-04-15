const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/', (req, res) => {
  Celebrity.find()
    .then( celebrities => {

      const data = {
        name: "Celebrities",
        celebrities: celebrities
      }
      res.render('celebrity', data)
    })
    .catch( err => console.log(err));
})