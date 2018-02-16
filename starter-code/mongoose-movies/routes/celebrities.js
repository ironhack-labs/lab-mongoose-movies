const express = require('express');
const Celebrity = require('../models/celebrity');

const router = express.Router();

router.get('/', (req, res, next) => {
    Celebrity.find({}, (err, celebrities) => {
        if (err) {return next(err) }

        res.render('celebrities/index', {
            celebrities: celebrities
        });
    });
});

// // Route Handler for New Product Form - GET
// router.get('/new', (req, res, next) => {
//     res.render('products/new');
// });

// // Route Handler for Create Product - POST
// router.post('/', (req, res, next) => {
//     // Take the params and translate them into a new object
//     const productInfo = {
//         name: req.body.name,
//         price: req.body.price,
//         imageUrl: req.body.imageUrl,
//         description: req.body.description
//     }

//     // Create a new Product with the Params passed
//     // in from the "/products/new" form
//     const newProduct = new Product(productInfo);

//     newProduct.save( (err) => {
//         // Error Handling
//         if (err) { return next(err) }

//         // Redirect to the List of Products (/products)
//         // if it saves.
//         return res.redirect('/products');
//     });
// }); 

// Show Individual Product Details
router.get('/:id', (req, res, next) => {
    const celebrityId = req.params.id;

    Celebrity.findById(celebrityId, (err, celebrity) => {
        if (err) { return next(err); }
        res.render('celebrities/show', { 
            celebrity: celebrity 
        });
    });
 }); 

// // Show Form to Update Form
// router.get('/:id/edit', (req, res, next) => {
//     const productId = req.params.id;
  
//     Product.findById(productId, (err, product) => {
//       if (err) { return next(err); }
//       res.render('products/edit', { product: product });
//     });
// });

// // Update Products Information Database
// router.post('/:id', (req, res, next) => {
//     const productId = req.params.id;

//     // Create a new object with all of the information from the request body.
//     // This correlates directly with the schema of Product
//     const updates = {
//         name: req.body.name,
//         price: req.body.price,
//         imageUrl: req.body.imageUrl,
//         description: req.body.description
//     };
  
//     Product.findByIdAndUpdate(productId, updates, (err, product) => {
//       if (err){ return next(err); }
//       return res.redirect('/products');
//     });
//   });

//   router.post('/:id/delete', (req, res, next) => {
//     const id = req.params.id;
  
//     Product.findByIdAndRemove(id, (err, product) => {
//       if (err){ return next(err); }
//       return res.redirect('/products');
//     });
  
//   });

module.exports = router;

