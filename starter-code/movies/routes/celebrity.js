const express = require('express')
const router  = express.Router()

const Celebrity = require('../models/Celebrity')


router.get('/:id', (req, res, next) => {
  console.log('celeb')
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

module.exports = router
