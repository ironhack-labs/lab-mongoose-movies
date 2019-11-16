const express = require('express');
const router = express.Router();
const Celebrities = require("../Models/Celebrity")


/* GET home page */
router.get('/', (req, res, next) => {
  Celebrities.find()
    .then(celebrityInDB => {
      console.log(celebrityInDB)
      res.render('celebrities/index', {
        celebrityInDB
      });
    })
    .catch(error =>{
      next();
      console.log(error)
    });
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrities.findById(req.params.id)
    .then(celebrity=> {
      console.log(celebrity)
      res.render('celebrities/show',
        celebrity
      );
    })
      .catch(error =>{
        next();
        console.log(error)
      });
});

module.exports = router;