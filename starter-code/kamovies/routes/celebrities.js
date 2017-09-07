var express = require('express');
const Celebrity = require('../models/Celebrity')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  Celebrity.find({}, (err, celebrities) => {
    if (err) { return next(err) }
    
    res.render('celebrities/index', {
      title:'Celebrities List',
      celebrities: celebrities
    })
  })
});

router.get('/new', function(req, res, next) {
  res.render('celebrities/new', {
    title:'New celebrity'
  })
});

router.get('/:id', function(req, res, next) {
  const celebrityId = req.params.id

  Celebrity.findById(celebrityId, (err, celebri) => {
    if (err) { return next(err) }
    
    res.render('celebrities/show',{
      title: celebri.name, 
      celebrity: celebri
    });
  })
});

router.post('/', (req, res, next) => {
  const celebrityInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.phrase
  }

  const newCelebrity = new Celebrity(celebrityInfo)
  newCelebrity.save(err => {
    if (err) { return next(err) }
    return res.redirect('/celebrities')
  })
});


module.exports = router;
