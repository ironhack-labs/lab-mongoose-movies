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

router.get('/:id', function(req, res, next) {
  const celebrityId = req.params.id

  Celebrities.findById(celebrityId, (err, celebri) => {
    if (err) { return next(err) }
    
    res.render('celebrities/show',{
      title: celebri.name, 
      celebrity: celebri
    });
  })
});

module.exports = router;
