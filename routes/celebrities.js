// routes/celebrity-routes.js

const express = require('express');

const Celebrity = require('../models/celebrity.js');

const celebrityRoutes = express.Router();


celebrityRoutes.get('/celebrities', (req, res, next) => {
  Celebrity.find((err, celebrityList) => {
    if (err) {
      next(err);
      return;
    }

    res.render('celebrities/celebrity-list-view.ejs', {
      celebrities: celebrityList
    });
  });
});

// celebrityRoutes.get('/celebrities/new', (req, res, next) => {
//   res.render('celebrities/new-celebrity-view.ejs');
// });
//
// // <form method="post" action="/celebrities/new">
// //                |                  |
// //             ====       ============
// //             |          |
// celebrityRoutes.post('/celebrities/new', (req, res, next) => {
//
//                                   // <input name="celebrityName">
// const theCelebrity = new Celebrity({  //                  |
//       //               ================================
//       //               |
//     name: req.body.celebrityName,
//     price: req.body.celebrityPrice,
//     imageUrl: req.body.celebrityImageUrl,
//     description: req.body.celebrityDescription
//   });
//
//   theCelebrity.save((err) => {
//     if (err) {
//       next(err);
//       return;
//     }
//
//       // http://localhost:3000/celebrities
//       //                          |
//       //              =============
//       //              |
//     res.redirect('/celebrities');
//       // redirect instead of render!
//       // this way, refreshing the page doesn't create duplicates.
//   });
// });
//
// celebrityRoutes.get('/celebrities/search', (req, res, next) => {
//   const searchTerm = req.query.celebritySearchTerm;
//   if (!searchTerm) {
//   res.render('celebrities/search-views.ejs');
//   return;
//   }
//
//   const searchRegex = new RegExp(searchTerm);
//
//   Celebrity.find(
//     { name: searchRegex },
//     (err, searchResults) => {
//       if(err) {
//         next(err);
//         return;
//       }
//         res.render('celebrities/search-views.ejs', {
//           celebrities: searchResults
//         });
//       }
//     );
// });


// OLD VERSION ===> using query strings
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                    /celebrity-details?id=1788
//                    /celebrity-details?id=9999
//                    /celebrity-details?id=5577
// celebrityRoutes.get('/celebrity-details', (req, res, next) => {
//             /celebrity-details? id =777777777
//                                |
//   const celebrityId = req.query.id;
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  //               /celebrities/1788
  //               /celebrities/9999
  //               /celebrities/5577
celebrityRoutes.get('/celebrities/:id', (req, res, next) => {
    //                         |
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, theCelebrity) => {
    if (err) {                        // |
      next(err);                      // =====================                                         // |
      return;                                             // |
    }                                                     // |
                                                          // |
    // DOESN'T WORK                                       // |
    // // 404 if no celebrity was found (i.e. bullshit id)  // |
    // if (!theCelebrity) {                                 // |
    //   next();                                          // |
    //   return;                                          // |
    // }                                                  // |
                                                          // |
    res.render('celebrities/celebrity-details-view.ejs', {     // |
      celebrity: theCelebrity                                 // |
    });          // |                                     // |
  });            // ==========================================
});

//   //               /celebrities/444/edit
//   //               /celebrities/123/edit
//   //               /celebrities/20/edit
// celebrityRoutes.get('/celebrities/:id/edit', (req, res, next) => {
//     //                         |
//   const celebrityId = req.params.id;
//
//   Celebrity.findById(celebrityId, (err, theCelebrity) => {
//     if (err) {
//       next(err);
//       return;
//     }
//
//     res.render('celebrities/edit-celebrity-view.ejs', {
//       celebrity: theCelebrity
//     });
//   });
// });
//
// celebrityRoutes.post('/celebrities/:id', (req, res, next) => {
//     //                          |
//   const celebrityId = req.params.id;
//
//     // gather the form values into an object
//   const celebrityChanges = {
//     name: req.body.celebrityName,
//     price: req.body.celebrityPrice,
//     imageUrl: req.body.celebrityImageUrl,
//     description: req.body.celebrityDescription
//   };
//
//   Celebrity.findByIdAndUpdate(
//       // 1st arg -> which document (id of the document)
//     celebrityId,
//       // 2nd arg -> which changes to save (from the form)
//     celebrityChanges,
//       // 3rd arg -> CALLBACK!
//     (err, theCelebrity) => {
//       if (err) {
//         next(err);
//         return;
//       }
//
//       // this is how you would redirect to celebrity details page
//       // res.redirect(`/celebrities/${celebrityId}`);
//
//       res.redirect('/celebrities');
//     }
//   );
// });
//
// celebrityRoutes.post('/celebrities/:id/delete', (req, res, next) => {
//   const celebrityId = req.params.id;
//
//   Celebrity.findByIdAndRemove(celebrityId, (err, theCelebrity) => {
//     if (err) {
//       next(err);
//       return;
//     }
//
//     res.redirect('/celebrities');
//   });
// });




module.exports = celebrityRoutes;
