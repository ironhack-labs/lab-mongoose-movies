var express = require('express');
var router = express.Router();
//Lo que existe dentro de el requiere es la exportancion, en este caso es el Schema.
const Celebrity = require('../models/celebrity');

module.exports = router;

// CRUD => R: Retrieve All
router.get('/', function(req, res, next) {
  Celebrity.find({}, (err, c) => {
    if (err) {
      console.log(err);
    }
    res.render('celebrity', {title: 'Celebridades', celebrities: c
    });
  });
});


router.get('/', function(req, res, next) {
  Product.findById(req.params.id, (err, c) => {
    if(err){
      console.log(err);
    }
    res.render('celebrities/show', {
      celebrities: c
    });
  });
});
