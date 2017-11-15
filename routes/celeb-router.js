      console.log("Initialized the call-back");
      const express = require("express");
      console.log("Initialized the call-back2");
      const MovieModel = require("../models/movie-model");
      const router = express.Router();
      console.log("Initialized the call-back3");

// router.get("/celeb", (req, res, next) => {
//     MovieModel
//       .find()
//       //.limit(25)
//       //.sort({ dateAdded: -1 })
//       //.exec()
//       .then((celebrityResults) => {
//           // create a local variable for the view to access the DB results
//           //sres.locals.listOfcelebrities = celebrityResults;
//
//           // render only after the results have been retrieved
//           // (the "then()" callback)
//           res.render("/celebrities-views/celeb");
//           console.log("Initialized the call-back");
//       })
//       .catch((err) => {
//           // render the error page with our error
//           next(err);
//       });
// }); // GET /products

router.get('/celebrities', (req, res, next) => {
 MovieModel.find().exec()
   .then( (celebrityResults) => {
       res.locals.listOfcelebrities = celebrityResults;
       res.render("celebrities-views/celeb");
   })
   .catch( (err) => {
     next(err);
   });
   });

   router.get("/celebrities/:id", (req, res, next) => {
     MovieModel.findById(req.params.celebrityId)
     .then((celebrityFromDb) => {
         // create a local variable for the view to access the DB result
         res.locals.celebrityDetails = celebrityFromDb;


             res.render("celebrities-views/show");

     }).catch((err) => {
         // render the error page with our error
         next(err);
     });
   }); // GET /products/details


   router.get("/celebrities/new", (req, res, next) => {
       res.render("celebrities-views/new");
   }); // GET /products/new

   // STEP #2: process the new product submission
   router.post("/celebrities/show", (req, res, next) => {
       const thecelebrity = new movieModel({
           name:        req.body.name,
           occupation:       req.body.occupation,
           catchPhrase:    req.body.catchPhrase, // |
       }); // |                     // |
           // fields from         names of the
           // model's schema      input tags

       theProduct.save()
         .then(() => {
             // STEP #3: redirect after a SUCCESSFUL save
             // redirect to the list of products page
             res.redirect("/celebrities/");
               // you CAN'T redirect to an EJS file
               // you can ONLY redirect to a URL
         })
         .catch((err) => {
             // is this a validation error?
             // if it is then display the form with the error messages
             if (err.errors) {
                 res.locals.validationErrors = err.errors;
                 res.render("celebrities-views/celebrity-form");
             }
             // if it isn't then render the error page with our error
             else {
                 next(err);
             }
         });
   }); // POST /products



   module.exports = router;
