const express = require('express');
const router  = express.Router();
const app = express();
const Celebrity = require('../models/Celebrity.js')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// /* Route POST create celebrity to receive the form submission */
// router.post('/new-celebrity', (req, res, next) => {
//   //because the info was sent with a post form, we can access the body with a req.body
//   console.log('My celebrity was created' , req.body);
//   console.log('req.body',req.body)
//    Celebrity.create({
//      name: req.body.name,
//      occupation: req.body.occupation,
//      catchPhrase: req.body.catchPhrase
//    })
//      .then(createdCelebrity => {
//        res.redirect('/celebrities/'+createdCelebrity._id)
//      });
//   });


//   /* GET create celebrity to display the form to add a celebrity */
// router.get('/new-celebrity', (req, res, next) => {
//   console.log("New celebrity to create")
//   Celebrity.find()
//     .then(celebs => {
//       // Render "views/index.hbs" and give a variable "celeb" that is "celebrities" (from then) 
//       res.render('new-celebrity', { 
//         celeb: celebs
//          })
//     })
// });


  
// /* GET celebrities page */
// router.get('/celebrities', (req, res, next) => {
//   // res.render('celebrities/index');
//   // console.log('test');
//   Celebrity.find()
//       .then(celebs => {
//       res.render('celebrities/index', {
//           listCelebrities: celebs
//       });
//       })
//     .catch(err => {
//       console.log("The error while searching celebrities occurred: ", err);
//     })
// });


// // http://localhost:3000/celebrities/5caf71777412fd8c8759ce80
// router.get('/celebrities/:celebId', (req,res,next) => {
//   console.log("The id is", req.params.celebId)
//   Celebrity.findById(req.params.celebId)
//     .then(celebFromDb => {
//       res.render('celebrities/show', {
//         celeb: celebFromDb
//       })
//     })
// })





// router.get('/celebrities/:celebId/delete', (req, res, next) => {
//   //Delete the celebrity and redirect the user to the home page when it's done
//     Celebrity.findByIdAndDelete(req.params.celebId) //SOlution 2
//     .then(deletedCeleb => {
//       //Redirect to the home page with a req.query.msg
//       res.redirect(`/?msg=The celebrity "${deletedCeleb.name}" has been deleted`)
//     })
//   })

//   router.get('/celebrities/:celebId/edit', (req, res, next) => {
//     //because the info was sent with a post form, we can access the body with a req.body
//     Celebrity.findById(req.params.celebId)
//        .then(celebFromDb => {
//          res.render('celebrities/edit-celebrity',{
//           celeb: celebFromDb
//          })
//        });
//     });
//     //     // Render "views/index.hbs" and give a variable "celebrities" that is "celebs" (from then) 
//     //     res.render('create-celebrity', { celeb: celebFromDb })
//     //   })
//   // );
// //Route POST 
//   router.post('/celebrities/:celebId/edit', (req, res, next) => {
//     //because the info was sent with a post form, we can access the body with a req.body
//     Celebrity.findByIdAndUpdate(req.params.celebId,{
//       name: req.body.name,
//       occupation: req.body.occupation,
//       catchPhrase: req.body.catchPhrase
//      })
//        .then(() => {
//          //Redirect to the detail page of the celebrity
//         res.redirect('/celebrities/'+ req.params.celebId) 
//        });
//     });


module.exports = router;