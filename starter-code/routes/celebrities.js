const router = require('express').Router();

const Celebrity = require('../models/Celebrity.model')

router.get('/', (req, res, next) => {
    Celebrity.find()
    .then(celebrities => res.render('./celebrities/index', { celebrities }))
    .catch(error => next(error))
})

router.get('/new', (req, res) => res.render('./celebrities/new'))

router.post('/new', (req, res) => {
    const updatedCelebrity = {
        name: req.body.name,
        ocupation: req.body.ocupation
    }

    if (req.body.catchPhrase) updatedCelebrity.catchPhrase = req.body.catchPhrase;

    Celebrity.create(updatedCelebrity)
    .then(() => res.redirect('/celebrities'))
    .catch(() => res.redirect('/new'))
})

router.get('/:id', (req, res, next) => {
    const { id } = req.params;

    Celebrity.findById(id)
    .then(celebrity => res.render('./celebrities/show', { celebrity }))
    .catch(error => next(error))
})

router.post('/:id', (req, res, next) => {
    const { id } = req.params;

    Celebrity.findByIdAndUpdate(id, req.body)
    .then(() => res.redirect(`/celebrities/${id}`))
    .catch(error => next(error))
})

router.get('/:id/edit', (req, res, next) => {
    const { id } = req.params;

    Celebrity.findById(id)
    .then(celebrity => res.render('./celebrities/edit', { celebrity }))
    .catch(err => next(err))
})

router.post('/:id/delete', (req, res, next) => {
    const { id } = req.params;

    Celebrity.findByIdAndRemove(id, err => {
        if (err) return next(err);

        res.redirect('/celebrities');
    })
})



module.exports = router;