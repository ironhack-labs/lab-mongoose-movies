const express = require('express');
const router = express.Router();
const Celebrity = require("../models/Celebrity");

/* GET home page */
// router.get('/', (req, res, next) => {
//   res.render('index');
// });

router.get('/', (req, res, next) => {
  Celebrity.find().then(celebrities_data => {
    //debug(celebrities_data);
    console.log(celebrities_data)
    res.render("celebrities/index", { celebrities_data });
  })
    .catch(error => {
      console.log(error)
    })
});

router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id).then(celeb_data => {
    //debug(celebrities_data);
    console.log(celeb_data)
    res.render("celebrities/show", { celeb_data });
  })
    .catch(error => {
      console.log(error)
    })
});




module.exports = router;