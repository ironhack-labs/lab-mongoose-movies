const express = require('express')
const router = express.Router()
const Celebrity = require('../models/Celebrity')

router.get('/celebrities', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) {
      return next(err)
    }

    res.render('celebrities/index_cel', {
      title: 'Celebrities list',
      celebrities: celebrities
    })
  })
})

router.get('/new', (req, res, next) => {
  res.render('celebrities/new',{title:'Add a celebrity'});
})

router.post('/celebrities', (req, res, next) => {
  const celebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }

  const newCelebrity = new Celebrity(celebrity)
  newCelebrity.save(err => {
    if (err) {
      return next(err)
    }

    return res.redirect('/celebrities')
  })
})

router.get('/:id', (req, res, next) => {
	const celebrityId = req.params.id
	console.log(celebrityId);
	Celebrity.findById(celebrityId, (err, celebrity) => {
		if (err) { return next(err)}

		res.render('celebrities/celebrity_detail', celebrity)
	})
})

module.exports = router
