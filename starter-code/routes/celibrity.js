const express = require('express');
const router  = express.Router();
const Celebrities = require("../models/celebrity");

router.get('/', (req, res, next) => {
  Celebrities.find({})
    .then((celebritiesResult)=>{res.render('celebrities.hbs', {celebritiesResult});
  })
  .catch((error)=>{
    next(error);
  });
});

module.exports = router;