const express = require('express');
const Celebrity = require('../models/celebrity');

const router  = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) { return next(err); }

    res.render('celebrities/index', {
      celebrities: celebrities
    });
  });
});

router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id, (err, celebrity) => {
    if (err) { return next(err); }

    res.render('celebrities/show', {
      celebrity: celebrity
    });
  });
});


//
// router.post('/', (req, res, next) => {
//   const productInfo = {
//     name: req.body.myName,
//     price: req.body.price,
//     imageUrl: req.body.imageUrl,
//     description: req.body.description
//   };
//
//   // Create a new Product with the params
//   const newProduct = new Product(productInfo);
//
//   newProduct.save((err) => {
//     if (err) { return next(err) }
//
//     return res.redirect('/products');
//   });
// });

module.exports = router;
