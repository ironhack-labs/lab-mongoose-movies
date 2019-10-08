const express = require('express');
const router  = express.Router();
const celebrityModel=require("./../models/celebrity.js")
const movieModel=require("./../models/movie.js")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// router.get('/celebrities', (req, res, next) => {
//   celebrityModel.find()
//     .then(dbRes => {
//       //console.log(dbRes)
//       res.render('celebrities/index', { celebrities: dbRes });
//     })
//     .catch(dbErr => {
//       console.log(dbErr)
//     })
// });


// // router.get('/celebrities/:id', (req, res,next) => {
  
// //   celebrityModel.findById(req.params.id).then(dbRes => {
// //     console.log(dbRes)
// //       res.render('celebrities/show', { celebrities: dbRes });
// //     })
// //     .catch(dbErr => {
// //       console.log("this is not working")
// //     })

// // });

// router.get('/celebrities/newceleb', (req, res, next) => {
//   res.render('celebrities/newceleb');
// });


module.exports = router;
