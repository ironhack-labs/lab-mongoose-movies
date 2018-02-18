const express = require('express');
const Celebrity = require('../models/celebrity');

const router = express.Router();

router.get('/celebrities', (req, res, next) => {
   Celebrity.find({}, (err, celebrities) => {
       if (err) {return next(err) }

       res.render('celebrities/index', {
           celebrities: celebrities
       });
   });
});
   

router.get("/celebrities/new", (req,res,next) => {
   res.render("celebrities/new");
});


router.post('/celebrities/new', (req, res, next) => {
   const productId = req.params.id;
 
   /*
    * Create a new object with all of the information from the request body.
    * This correlates directly with the schema of Product
    */
   const updates = {
       name: req.body.name,
       price: req.body.price,
       imageUrl: req.body.imageUrl,
       description: req.body.description
   };
 
   Product.findByIdAndUpdate(productId, updates, (err, product) => {
     if (err){ return next(err); }
     return res.redirect('/products');
   });
 });

module.exports = router;