const express = require('express');
const Celebrity = require('../model/celebrity');
const router = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find({}, (error, celebrityList) =>{
    if(error) return next(error);

    res.render('celebrity/index', {
      celebrityList : celebrityList,
    })
  });
});

// router.get('/celebrity', (req, res, next) => {
//   res.render('/celebrity');
// });
// router.get('/bio', (req, res, next) => {
//   res.render('celebrity/bio');
// });


router.get('/:id', (req, res, next) => {
  let id = req.params.id

  Celebrity.findById(id, (err, detail) => {
    res.render('celebrity/bio', {
      detail: detail
    })
  })
});



  module.exports = router;
