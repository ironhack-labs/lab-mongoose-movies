const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      // console.log(celebrities);
      res.render("celebrities/index", { celebrities });
    })
    .catch(error => {
      console.log('Error: ',error);
    });
});

router.get('/celebrities/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  // if (!/^[0-9a-fA-F]{24}$/.test(celebrityId)) { 
  //   return res.status(404).render('not-found');
  // }
  Celebrity.findOne({'_id': celebrityId})
    // .populate('author')
    .then(celebrity => {
      console.log(celebrity);
      if (!celebrity) {
        console.log(celebrity);
          return res.status(404).render('not-found');
      }
      res.render("celebrities/show", { celebrity });
    })
    .catch(next);
});

// router.get('/celebrities/:id', (req, res, next) => {
//   Celebrity.find()
//     .then(celebrity => {
//       // console.log(celebrities);
//       res.render("celebrities/show",  celebrity );
//     })
//     .catch(error => {
//       console.log('Error: ',error);
//     });
// });

module.exports = router;
