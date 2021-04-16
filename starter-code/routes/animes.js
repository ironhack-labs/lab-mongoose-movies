const router = require('express').Router();
const Anime = require('../models/Anime.model');

router.get('/', (req, res, next) => {
    Anime.find((error, animes) => {
        if (error) return next(error);

        res.render('./animes/index', { animes });
    })
})

router.get('/new', (req, res) => res.render('./animes/new'))

router.post('/new', (req, res) => {
    Anime.create(req.body, error => {
        if (error) return res.redirect('/animes/new');

        res.redirect('/animes');
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Anime.findById(id, (error, anime) => {
        if (error) return next(error);

        res.render('./animes/show', { anime })
    })
})

router.get('/:id/edit', (req, res, next) => {
    const { id } = req.params;

    Anime.findById(id, (error, anime) => {
        if (error) return next(error);

        res.render('./animes/edit', { anime })
    })
})

router.post('/:id/edit', (req, res) => {
    const { id } = req.params;

    Anime.findByIdAndUpdate(id, req.body, error => {
        if (error) return next(error);

        res.redirect(`/animes/${id}`);
    })
})

router.post('/:id/delete', (req, res, next) => {
    const { id } = req.params;

    Anime.findByIdAndRemove(id, error => {
        if (error) return next(error);

        res.redirect('/animes')
    })
})



module.exports = router;