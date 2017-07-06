const express = require('express')
const router  = express.Router()

const Celebrity = require('../models/Celebrity')


/* GET home page. */
router.get('/', (req, res, next) => {

  Celebrity.find({}, (err, celebrities) => {
    res.render('celebrity/index', {
      title: 'CELEBRITIES',
      celebrities: celebrities
    })
  })
})

/* POST home page. */
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

/* GET home page. */
router.get('/new', (req, res, next) => {
  res.render('celebrity/new', {
    title: 'CELEBRITIES',
    celebrity: {},
    action: '/celebrities',
    method: 'post'
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

router.post('/:id', (req, res, next) => {
  let id = req.params.id
  let {name, occupation, catchPhrase} = req.body;

  let celebrity = {
    name,
    occupation,
    catchPhrase
  }

  console.log(id)
  Celebrity.findByIdAndUpdate(id, celebrity, (err, obj) => {
    if (err){ next(err); }
    res.redirect("/celebrities")

  })
})

router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id
  console.log(id)
  Celebrity.findById(id, (err, obj) => {
    if (err){ next(err) }
      res.render('celebrity/new', {
        title: 'CELEBRITIES',
        celebrity: obj,
        action: `/celebrities/${id}` ,
        method: 'post'
      })
  })
})

router.post('/:id/delete', (req, res, next) => {
  let id = req.params.id
  console.log(id)
  Celebrity.findByIdAndRemove(id, (err, obj) => {
    if (err){ next(err); }
    res.redirect("/celebrities")
  });
})

module.exports = router
