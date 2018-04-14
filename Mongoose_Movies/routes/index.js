var express = require('express');
var router = express.Router();

const Celebrity = require('../models/celebrity');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Find by name 
router.get('/search', (req, res, next)  => {
  let query = req.query.searchTerm;
  let queryRegex = new RegExp(query); //Regex -> searching similarities

  Celebrity.find({ name: queryRegex }, (err, celeb) => {
    if (err) { 
      return next(err); 
    } else{
      console.log(celeb);
    res.render('celebrities/search-result', { celeb });
    }
  });
});

module.exports = router;
