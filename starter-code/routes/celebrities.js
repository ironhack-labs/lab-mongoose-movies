const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity')

router.get('/celebrities', (req,res)=>{
    Celebrity.find()
    .then(celebrities=>{
        res.render('celebrities/index', {celebrities})
    })

});

router.post('/', (req,res) => {
    Celebrity.create(req.body)
    .then(() => {
        res.redirect('/celebrities');
})
    .catch(err => {
        console.log(err);
        res.render('celebrities/new', {err});
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Celebrity.findById(id)
    .then(celebrities => {
    
    res.render('celebrities/show', {celebrities});
})
    .catch((err) => {
    throw err;
})

});

router.post('/:id', (req, res, next)=>{
    const posting = req.body;
    Celebrity.findByIdAndUpdate(req.params.id, posting)
    .then(()=>{
        res.redirect('/celebrities')

    })
    .catch(err=>{
        next();
        throw err;
    })
});

router.get('/edit/:id2', (req, res, next) => {
    const id2 = req.params.id2;
    Celebrity.findById(id2)
    .then(celebrities => {
        res.render('celebrities/edit', {celebrities});
    })
    .catch(err => {
        next();
        throw err;
    });
});

router.post('/delete/:id2', (req, res, next) => {
    const del= req.params.id2;
    Celebrity.findByIdAndRemove(del)
    .then(()=>{
        res.redirect('/celebrities');
    })
    .catch(err => {
        next();
        throw err;
    });
});

router.get('/new', (req, res) => {
    res.render('celebrities/new');
});



module.exports = router;