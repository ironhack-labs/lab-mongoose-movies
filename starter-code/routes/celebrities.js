const express = require('express');
const Celebrity = require('../models/celebrity');
const router  = express.Router();

router.get('/celebrities', (req, res, next) => {

  Celebrity.find({}, {name:1})
  .then((celebrities)=>{
    res.render('celebrities/index', {celebrities});
  })
  .catch((err)=>{
    console.log(err)
    res.send(err)
  })
});

router.post('/celebrities', (req,res,next)=>{

    const newCelebrity = req.body

    Celebrity.create(newCelebrity)
        .then(()=>{
            res.redirect('/celebrities')
        })
        .catch((err)=>{
            console.log(err)
            res.render('celebrities/new')
        })
})

router.get('/celebrities/new', (req,res,next)=>{
    res.render('celebrities/new')
})

router.get('/celebrities/:id', (req,res,next)=>{
    const celebrityId = req.params.id

    Celebrity.findById(celebrityId)
    .then((result)=>{
        res.render('celebrities/show', result)
    })
    .catch((err)=>{
        console.log(err)
        res.send(err)
    })
    
})

router.post('/celebrities/:id', (req,res,next)=>{
    const id = req.params.id
    const editedCelebrity = req.body
    Celebrity.findByIdAndUpdate(id, editedCelebrity)
        .then(()=>{
            res.redirect(`/celebrities/${id}`)
        })
        .catch((err)=>{
            console.log(err)
            res.send(err)
        })
})

router.post('/celebrities/:id/delete', (req,res,next)=>{
    const celebrityId = req.params.id

    Celebrity.findByIdAndDelete(celebrityId)
    .then(()=>{
        res.redirect('/celebrities')
    })
    .catch((err)=>{
        console.log(err)
        res.send(err)
    })
})

router.get('/celebrities/:id/edit', (req,res,next)=>{
    const celebrityId = req.params.id
    Celebrity.findById(celebrityId)
    .then((result)=>{
        res.render('celebrities/edit', result)
    })
    .catch((err)=>{
        console.log(err)
        res.send(err)
    })
})


module.exports = router;
