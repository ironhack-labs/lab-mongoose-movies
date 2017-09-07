var express = require('express');
const Celebrities = require('../models/Celebrity')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  Celebrities.find({}, (err, celebrities) => {
    if (err) { return next(err) }
    
    res.render('celebrities/index', {
      title:'Celebrities List',
      celebrities: celebrities
    })
  })
});

module.exports = router;
