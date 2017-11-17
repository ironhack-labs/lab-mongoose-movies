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



  //  // STEP #2: process the new product submission
  //  router.get("/celebrities/show", (req, res, next) => {
  //      const theCelebrity = new movieModel({
   //
  //          name:req.body.name,
  //          occupation:req.body.occupation,
  //          catchPhrase:req.body.catchPhrase, // |
  //      }); // |                     // |
   //
   //
  //      theCelebrity.save()
  //        .then(() => {
   //
  //            res.redirect("/celebrities/");
   //
  //        })
  //        .catch((err) => {
   //
  //            if (err.errors) {
  //                res.locals.validationErrors = err.errors;
  //                //res.render("celebrities-views/celebrity-form");
  //            }
   //
  //            else {
  //                next(err);
  //            }
  //        });
  //  }); // POST /products

   //
   router.get("/celebrities/new", (req, res, next) => {
       res.render("celebrities-views/new");
   }); // GET /products/new
   //
   router.get('/celebrities/:id', (req, res, next) => {
     MovieModel.findById(req.params.id)
     .then((celebrityFromDb) => {
         // create a local variable for the view to access the DB result
             res.locals.celebrityDetails = celebrityFromDb;
             res.render("celebrities-views/show");
             console.log('Created the show parameters to pass in');
      }).catch((err) => {
         // render the error page with our error
         next(err);
     });
   }); // GET /products/details
   router.post("/celebrities", (req, res, next) => {
       const theCelebrity = new MovieModel({
           name:req.body.celebrityName,
           occupation:req.body.celebrityOccupation,
           catchPhrase:req.body.celebrityCatchPhrase// |

       }); // |                     // |

             theCelebrity.save().then(() => {
             res.redirect("/celebrities/show");

         })
         .catch((err) => {
           if (err.errors){
             res.render("celebrities-views/new");
             console.log(err);
          }else{
             next(err);}
         });
   }); // POST /products

   // use this or the POST version of deleting (not both)
   router.get("/celebrities/:id/delete", (req, res, next) => {
       MovieModel.findByIdAndRemove(req.params.id)
         .then((celebFromDb) => {
             // redirect to the list of products page
             // (you can't see the details of a product that isn't in the DB)
             res.redirect("/celebrities");
               // you CAN'T redirect to an EJS file
               // you can ONLY redirect to a URL
         })
         .catch((err) => {
             next(err);
         });
   });


   module.exports = router;
