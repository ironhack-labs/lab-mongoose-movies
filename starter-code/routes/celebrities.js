const express = require('express');

const router = express.Router();
const Celebrity = require('../models/Celebrity');

// rotas +app.js
/* GET home page */
router.get('/', (req, res) => {
  Celebrity.find()
    .then((results) => {
      res.render('celebrity', { celebrityList: results });
    })
    .catch((err) => {
      throw Error(err);
    });
});


router.get('/:id', (req, res) => {
  Celebrity.findOne({ _id: req.params.id })
    .then((results) => {
      res.render('show', { celebrityList: results });
    })
    // .catch(next);
    .catch((err) => {
      throw Error(err);
    });
});


// router.get('/add', (req, res, next) => {
//   res.render('celebrity-add');
// });

// router.post('/add', (req, res, next) => {
//   const {
//     name, lastName, occupation, catchPhrase, pictureUrl,
//   } = req.body;
//   const newCelebrity = new Celebrity({
//     name, lastName, occupation, catchPhrase, pictureUrl,
//   });
//   newCelebrity.save()
//     .then((show) => {
//       res.redirect('/celebrity');
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

module.exports = router;
