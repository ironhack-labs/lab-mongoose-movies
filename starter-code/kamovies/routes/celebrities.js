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

router.post('/:id/delete', function(req, res, next) {
  const celebrityId = req.params.id

  Celebrity.findByIdAndRemove(celebrityId, (err, celebri) => {
    if (err){ return next(err); }
    return res.redirect('/celebrities');
  });
});

router.get('/:id/edit', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId, (err, celebri) => {
    if (err) { return next(err); }
    res.render('celebrities/edit', { title:'Edit form', celebrity: celebri });
  });
});

router.post('/:id/edit', (req, res, next) => {
  const celebrityId = req.params.id;

  const updates = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.phrase
  };
  Celebrity.findByIdAndUpdate(celebrityId, updates, (err, product) => {
    if (err){ return next(err); }
    return res.redirect(`/celebrities/${celebrityId}`);
  });
});



module.exports = router;
