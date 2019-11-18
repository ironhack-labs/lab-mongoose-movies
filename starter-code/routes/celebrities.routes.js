const express = require('express');
const router = express.Router();



const Celebrity = require('../models/celebrity');


router.get('/', (req, res) => {
  Celebrity.find()
    .then(allTheCelebrities => res.render('celebrities/index', { celebrities: allTheCelebrities }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});

router.get('/details/:id', (req, res) => {
  Celebrity.findById(req.params.id)
    .then(thecelebrities => res.render('celebrities/show', { celebrities: thecelebrities }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});












module.exports = router;