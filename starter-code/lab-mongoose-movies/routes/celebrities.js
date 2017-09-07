var express = require('express')
var router = express.Router()
const Celebrity = require('../models/Celebrity')

router.get('/celebrities', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) { return next(err) }

    res.render('celebrities/index', {
      title:'Celebrities',
      celebrities: celebrities
    })
  })
})

router.post('/celebrities/:id', (req, res, next) => {
  const celebrityId = req.params.id

  const celebrityUpdate = {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
  }

  const newCelebrity = new Celebrity(celebrityUpdate)

  Celebrity.findByIdAndUpdate(celebrityId, celebrityUpdate, (err, celebrity) => {
    if (err){ return next(err); }
    return res.redirect(`/celebrities/${celebrityId}`);
  })
})

router.post('/celebrities', (req, res, next) => {
  const celebrityInfo = {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
  }

  const newCelebrity = new Celebrity(celebrityInfo)
  newCelebrity.save( (err) => {
    if (err) { res.render('celebrities/new', {title: 'Add Celebrity'}) }
    return res.redirect('/celebrities')
  })
})

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new', {title: 'Add Celebrity'})
})

router.post('/celebrities/:id/delete', (req, res, next) => {
  const celebrityId = req.params.id

  Celebrity.findByIdAndRemove(celebrityId, (err, celebrity) => {
    if (err){ return next(err) }
    return res.redirect('/celebrities')
  })
})

router.get('/celebrities/:id/edit', (req, res, next) => {
  const celebrityId = req.params.id

  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err){ return next(err) }
    res.render('celebrities/edit', { title:'Edit celebrity', celebrity: celebrity })
  })
})

router.get('/celebrities/:id', (req, res, next) => {
  const celebrityId = req.params.id

  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) { return next(err) }

    res.render('celebrities/show', {
      title:'Celebrity Detail',
      celebrity: celebrity
    })
  })
})

module.exports = router
