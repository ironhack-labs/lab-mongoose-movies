const express = require('express');
const router = express.Router();
const Celebrities = require("../models/Celebrity");


router.get('/', (req, res, next) => {
  res.render('index')
})


router.get('/celebrities/:id?', (req, res, next) => {
  Celebrities
    .find()
    .then(allCelebs => {
      let id = req.params.id

      if (id) {
        Celebrities
          .find({_id : id})
          .then(oneCeleb => {
            res.render('celebrities/show', { oneCeleb });
          })
      } else {
        res.render('celebrities/index', { allCelebs, id });
      }

    })
    .catch(err => {
      next();
      console.log(`There was an error : \n ${err}`)
    })
});


module.exports = router;
