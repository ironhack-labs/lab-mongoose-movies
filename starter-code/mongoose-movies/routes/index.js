


const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity')
const Movie = require('../models/movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', {theUser: req.user});
});

router.get('/fancypage', (req, res, next) => {
  Celebrity.find()
  .then((ret)=>{
    // console.log(ret)
    res.render('fancypage', {celebs: ret})
  })

})


// router.get('/axios/', (req, res, next) => {
//   res.render('/axios/index')
// })

module.exports = router;
