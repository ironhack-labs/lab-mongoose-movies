//you need express to work with backend routes
const express = require('express');

//you need to refer to the model that you made
const Celebs = require('../model/celebrity.js');

//you need to call on the express router method
//I believe this will initialize this file as a routes file
const celebRoutes = express.Router();

//this defines what will happen when you visit the localhost/celebrities
celebRoutes.get('/celebrities', (req, res, next) => {

  //hey celebs model find me all of the documents you have
  //since the model refers to the db, it will happily oblige
  //we need to pass two arguments to the find method
  //basically a error callback and a placeholder argument
  Celebs.find(( err, celebList ) => {
    if ( err ) { //if you get an error
      next( err ); //passes control to the next route in event of error
      return;
    } //close if statement

    res.render('./celebrities/celeb-view.ejs', //show or render the celeb-view
    //pass the celebs variable to the view, using the results of the find
    { celebs: celebList });
  });
});

celebRoutes.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new-celeb-view.ejs');
});


// celebRoutes.get('/celebrities/az', (req, res, next) => {
//   Celebs
//   .find()
//   //sorts items in reverse order aka "descending"
//   .sort( { name: 1 })
//   .limit(10)
//   //this runs all of the .methods that I have assigned on the query above
//   // aka a method chain
//   .exec((err, celebList) => {
//     if (err) {
//       next(err);
//       return;
//     }
//     res.render('celebrities/az-view.ejs', {
//       celebrities: celebList
//     });
//   });
// });
// celebRoutes.post('/celebrities/new', (req, res, next) => {
//   const theCeleb = new Celeb({
//     //this value comes from the input form that is being posted...to the body
//     name:         req.body.celebName,
//     price:        req.body.celebPrice,
//     imageUrl:     req.body.celebImageUrl,
//     description:  req.body.celebDescription
//   });
//   theCeleb.save((err) => {
//     if (err) {
//       res.render('celebrities/new-celeb-view.ejs', {
//         errors: theCeleb.errors
//       });
//       return;
//     }
//               //localhost:3000/celebrities
//     res.redirect('/celebrities');
//   });
// });

// // celebRoutes.get('/celebrities/economical', (req, res, next) => {
// //   Celeb
// //   .find()
// //   //sorts items in reverse order aka "descending"
// //   // .sort( { price: 1 })
// //   .limit(10)
// //   //this runs all of the .methods that I have assigned on the query above
// //   // aka a method chain
// //   .exec((err, celebList) => {
// //     if (err) {
// //       next(err);
// //       return;
// //     }
// //     res.render('celebrities/economical-view.ejs', {
// //       celebrities: celebList
// //     });
// //   });
// // });
//
// //celeb-details?id=17878787
// //going to use a variable in the url instead
// // celebRoutes.get('/celeb-details', (req, res, next) => {
// //these are URL parameters instead of QUERY which would be req.query.id
// // send will just display the result in the browser on it's own
// //but we are going to use that we are going to use the render
// //and the findById method is a mongoose method that will let you iterate
// // in the DB and find the celebrities by their id...
// // in this case the id is automatically assigned by mongoDB
// // then this will grab the celebID that is gathered from the URL
// // rem the req.query will create a key value pair in the url
//
// celebRoutes.get('/celebrities/:id', (req, res, next) => {
//  const celebId = req.params.id;
//
//
//  Celeb.findById(celebId, (err, theCeleb) => {
//    if (err) {
//      next(err);
//      return;
//    }
//    // 404 if no celeb was found
//    if (!theCeleb) {
//      next();
//      return;
//    }
//    res.render('celebrities/celeb-details-view.ejs', {
//      celeb: theCeleb
//    });
//  });
// });
// //                  /celebrities/444/edit (example of how the URL is going to look)
// celebRoutes.get('/celebrities/:id/edit', (req, res, next) => {
//   const celebId = req.params.id;
//   Celeb.findById(celebId, (err, theCeleb) => {
//     if (err) {
//       next(err);
//       return;
//     }
//   res.render('celebrities/edit-celeb-view.ejs', {
//     celeb: theCeleb,
//     errors: theCeleb.errors
//   });
// });
// });
// // params gets info from a URL
// // so does query but query requires the url to be in a keyValue pair ?name=bob would be in the URL
// // body gets stuff from inputs
// //
// //                      remeber :id is just a placeholder
// //                      it could be whatever you want
// celebRoutes.post('/celebrities/:id/', (req, res, next) => {
//   const celebId = req.params.id;
//
//   const celebChanges = {
//     name:         req.body.celebName,
//     price:        req.body.celebPrice,
//     imageUrl:     req.body.celebImageUrl,
//     description:  req.body.celebDescription
//   };
// //this new method has three arguments
//   Celeb.findByIdAndUpdate(
//     celebId,                  //which document to change
//     celebChanges,             //variable of the changes you want to make
//     (err, theCeleb) => {      //the callback
//       if (err) {
//         next(err);
//         return;
//       }                        //end of error callback
//                               //this is how you would redired to prodcut details page
//                               // res.redirect(`/celebrities/${celebId}`);
//
//     res.redirect('/celebrities');
//     }
//   );
// });
// //                            :id could be whatever I want
// celebRoutes.post('/celebrities/:id/delete', (req, res, next) => {
// //                   calling  :id
//   const celebId = req.params.id;
//
// // this does db.celebrities.deleteOne({ _id: celebId  })
//   Celeb.findByIdAndRemove(celebId, (err, theCeleb) => {
//     if (err) {
//       next(err);
//       return;
//     }
//
//     res.redirect('/celebrities');
//   });
// });
//
// celebRoutes.get('/search', (req, res, next) => {
//   const searchTerm = req.query.celebritiesearchTerm;
//   if (!searchTerm) {
//     res.render('celebrities/search-view.ejs');
//     return;
//   }
//
// // "nintendo" turns in the reg expression nintendo so anything that matches would be foudn
//   const searchRegex = new RegExp(searchTerm, 'i');
//
//   Celeb.find(
//     { name: searchRegex },
//     (err, searchResults) => {
//       if (err) {
//         next(err);
//         return;
//       }
//         res.render('celebrities/search-view.ejs', {
//           celebrities: searchResults
//         });
//       }
//   );
// });

module.exports = celebRoutes;
