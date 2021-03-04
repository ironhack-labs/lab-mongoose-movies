const express = require('express');
const router  = express.Router();

//celebrity model
const CelebrityModel = require('./../models/celebritiesModel');

//CELEBRITIES HOME GET
router.get('/', (req, res, next) => {
    CelebrityModel.find()
    .then(dbSuccess => {
        res.render('celebrities/celebrities', {celebrities : dbSuccess});
    })
    .catch(err => next(err));
});

//CREATE GET
router.get('/new', (req, res, next) => {
    res.render('celebrities/new-celebrity')
});

//CREATE POST
router.post('/create', (req, res, next) => {
    CelebrityModel.create(req.body)
    .then(() => res.redirect('/celebrities'))
    .catch(err => {
        res.render('celebrities/new-celebrity');
    });
});

//CELEBRITY DETAIL GET
router.get('/celebrity/:id', async (req, res, next) => {
    try {
        const celebrity = await CelebrityModel.findById(req.params.id);
        res.render('celebrities/celebrity-details', {celebrity});
    } catch(err) {
        next(err)
    }
})

//CELEBRITY DELETE GET
router.get('/celebrity/:id/delete', async (req, res, next) => {
    try {
        const deleteById = await CelebrityModel.findByIdAndDelete(req.params.id);
        res.redirect('/celebrities')
    } catch(err) {
        next(err)
    }
})

//CELEBRITY UPDATE GET
router.get('/celebrity/:id/edit', async (req, res, next) => {
    try {
        const celebrity = await CelebrityModel.findById(req.params.id);
        res.render("celebrities/edit-celebrity", {celebrity})
    } catch(err) {
        next(err)
    }

})

//CELEBRITY UPDATE POST
router.post('/celebrity/:id/update', async (req, res, next) => {
    try {
        const updateCelebrity = await CelebrityModel.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/celebrities')
    } catch(err) {
        next(err)
    }

})

module.exports = router;