const express = require("express")
const router = express.Router()
const app = require('../app')
const Celebrity = require("./../models/celebrity-model")

//-------------------------------------------ALL CELEBS---------------------------------------------------

router.get('/', (req, res) => {
    Celebrity
        .find({}, { name: 1 })
        .then(response => res.render('celebrities/index', { response }))
        .catch(err => console.log(err))
});

//-------------------------------------------CELEB DETAILS------------------------------------------------

router.get('/details/:celeb_id', (req, res) => {

    const celebId = req.params.celeb_id

    Celebrity
        .findById(celebId)
        .then(response => res.render('celebrities/show', response))
        .catch(err => console.log(err))
});

//-------------------------------------------RESTRICTED AREA!!! ------------------------------------------

//-------------------------------------------ADD NEW CELEB------------------------------------------------

router.use((req, res, next) => req.session.currentUser ? next() : res.render('auth/login', { errorMsg: 'Zona restringida' }))

router.get('/new', (req, res) => res.render('celebrities/new', req.session.currentUser));

router.post('/', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('Error:', err))

});

//-------------------------------------------DELETE A CELEB------------------------------------------------

router.post('/details/:celeb_id/delete', (req, res) => {

    const celebId = req.params.celeb_id

    Celebrity
        .findByIdAndDelete(celebId)
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log(err))
});

//-------------------------------------------EDIT CELEB I-------------------------------------------------------

router.get('/edit', (req, res) => {

    const celebId = req.query.celeb_id

    console.log(celebId)

    Celebrity
        .findById(celebId)
        .then(response => res.render('celebrities/edit', response))
        .catch(err => console.log(err))
});

router.post('/edit', (req, res) => {

    const celebId = req.query.celeb_id

    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .findByIdAndUpdate(celebId, { name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log(err))
});

//-------------------------------------------EDIT II---------------------------------------------------

// router.get('/details/:celeb_id/edit', (req, res) => {

//     const celebId = req.params.celeb_id

//     console.log(celebId)

//     Celebrity
//         .findById(celebId)
//         .then(response => res.render('celebrities/edit', response))
//         .catch(err => console.log(err))
// });

// router.post('/details/:celeb_id/edit', (req, res) => {

//     const celebId = req.params.celeb_id

//     const { name, ocupation, catchPhrase } = req.body

//     Celebrity
//         .findByIdAndUpdate(celebId, { name, ocupation, catchPhrase })
//         .then(() => res.redirect('/celebrities'))
//         .catch(err => console.log(err))
// });

module.exports = router