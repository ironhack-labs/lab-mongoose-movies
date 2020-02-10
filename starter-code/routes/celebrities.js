const express = require('express');
const router = express.Router();
const celebrities = require('../models/Celebrity.js')


// router.get('/celebrities',req, res, next => {
//   res.render('elebrities')
// });
// router.get('/celebrities', (req, res, next) => {
//   celebrities.find()
//     .then(allCelebrities => {
//     res.render('celebrities/index', {allCelebrities})
//     })
//     .catch(err => next(err))
//   console.log('error');
// })

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(allTheCelebritiesFromDB => {
      // console.log('Retrieved Celebrities from DB:', allTheBooksFromDB);
      res.render('celebritied', {
        celebritieds: allTheCelebritiesFromDB
      });
    })
    .catch(error => {
      console.log('Error while getting the celebrities from the DB: ', error);
    })
});

// router.get("/updateUser/:id", (req, res) => {
//   Employees.findById(req.params.id).then(employee => {
//     console.log(employee);
//     res.render("updateUser", {
//       employee
//     });
//   });
// });

router.get('/calebrities/:id', (req, res, next) => {
  celebrities.findById(id)
    .then(oneCelebrity => {
      res.render('celebrities/show', oneCelebrity);
    })
    .catch(err => console.log('err'))
});



module.exports = router;
