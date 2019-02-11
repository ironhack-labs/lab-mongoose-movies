let router = require('express').Router();
let Celebrity = require('../models/Celebrity');

router.post('/:id/edit', (req,res,next)=>{
    const {id} = req.params
    Celebrity.findByIdAndUpdate(id, req.body)
        .then(celebrity => res.redirect('/celebrities/' + id))
        .catch(e=>next(e))
})

router.get('/id:/edit', (req,res,next)=>{
    Celebrity.findById(req.params.id)
        .then(celebrity=>{
            res.render('edit',celebrity)
        })
        .catch(e=> next(e))
})

router.post('/:id/delete',(req,res,next)=>{
    Celebrity.findByIdAndRemove(req.params.id)
        .then(()=>{
            res.redirect('/celebrities')
        })
        .catch(e=> next(e))
})

router.get('/new', (req,res,next)=>{
    res.render('new')
})

router.post('/new', (req, res, next)=>{
    Celebrity.create(req.body)
        .then(()=>{
            res.redirect('/celebrities')
        })
        .catch(e=> next(e))
});

router.get('/:id', (req,res,next)=>{
    console.log(req.params)
    Celebrity.findById(req.params.id)
        .then(celebrity=>{
            console.log(celebrity)
            res.render('show', celebrity)})
        .catch(e=>next(e))
})


router.get('/', (req,res,next)=>{
    Celebrity.find()
        .then(celebrities=>{
            res.render('celebrities', {celebrities})
        })
        .catch(e=> next(e))
});


module.exports = router;