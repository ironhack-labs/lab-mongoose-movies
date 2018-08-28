
const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/keyWord', (req, res, next) => {
  let keyWord = req.query.celebrity;
  console.log("req.query", req.query);
  // console.log("artist", artist);
  
  Celebrity.find( { name: new RegExp(''+keyWord+'',"ig")} )
  .then(celebrities => {
       console.log(celebrities[0])
    res.render('celebrities-search', {
      celebrities: celebrities
    });
  })
  .catch(error => {
    console.log("ERR",error)
  })

});

module.exports = router;
