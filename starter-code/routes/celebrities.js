const express = require('express');
const router = express.Router()
const Celebrity = require('../models/Celebrity')

router.get('/celebrities', async(req, res) => {
    const celeb = await Celebrity.find()
    res.render(`celebrities/index`, { celeb })
})

router.get('/celebrities/:id', async(req, res) => {
    const { id } = req.params
    const celebrity = await Celebrity.findById(id)
    res.render('celebrities/show', { celebrity })
})

router.get('/newCelebrity', (req, res) => {
    res.render('celebrities/new')
})

router.post('/newCelebrity', async(req, res) => {
    try {
        const { name, ocupation, catchPhrase } = req.body
        await Celebrity.create({ name, ocupation, catchPhrase })
        res.redirect('/')
    } catch (err) {
        console.log(err)
    }
})

router.post('/celebrities/:id/delete', async(req, res) => {
    try {
        const { id } = req.params
        const celebrity = await Celebrity.findByIdAndRemove(id)
        res.redirect('/celebrities')
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;