const express = require('express')
const router  = express.Router()

const Celebrity = require('../models/Celebrity')

/* GET home page. */
router.get('/new', (req, res, next) => {
  Celebrity.find({}, (err, celebrity) => {

    res.render('celebrity/new', {
      title: 'CELEBRITIES',
      celebrity: celebrity
    })
  })
})

router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id, (err, celebrity) => {

    if(err){
      next(err);
    }

    res.render('celebrity/show', {
      title: 'SHOW',
      celebrity: celebrity
    })
  })
})



/* GET home page. */
router.get('/', (req, res, next) => {

  Celebrity.find({}, (err, celebrities) => {
    res.render('celebrity/index', {
      title: 'CELEBRITIES',
      celebrities: celebrities
    })
  })
})

/* GET home page. */
router.post('/', (req, res, next) => {
  let {name, occupation, catchPhrase} = req.body;

  let celebrity = new Celebrity({
    name,
    occupation,
    catchPhrase
  });
  celebrity.save((err, obj) => {
    if(err){
      res.redirect('/celebrities/new');
    }
   res.redirect('/celebrities');
  });

})

module.exports = router
