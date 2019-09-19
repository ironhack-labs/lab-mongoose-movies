const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity.js')


router.get('/celebs', (req, res, next)=>{
    Celebrity.find()
    .then((result)=>{
        console.log("This is the list of celebs")
        res.render('celebrities/index', {result: result})
    })
    .catch((err)=>{
        next(err);
    })
})

router.get('/celebs/details/:id', (req, res, next)=>{
    let id = req.params.id;
    console.log('><><><><><><', id)
    Celebrity.findById(id)
    .then((result)=>{
        console.log(result)
        res.render('celebrities/details', {result})
    })
    .catch((err)=>{
        next(err)
    })
})

router.get('/celebs/create-celeb', (req, res, next)=>{
    res.render('celebrities/show')
})
router.post('/celebs/create-celeb', (req, res, next)=>{
    let name = req.body.theName;
    let occupation = req.body.theOccupation
    let catchphrase = req.body.theCatchphrase

    Celebrity.create({
        name: name,
        occupation: occupation,
        catchphrase: catchphrase
    })
    .then((result)=>{
        res.redirect('/celebs')
    })
    .catch((err)=>{
        next(err);
    })
})
router.post('/celebs/:id/delete', (req, res, next)=>{
    let id = req.params.id;
    console.log("<><><><><><><", id)
    Celebrity.findByIdAndRemove(id)
    .then((result)=>{
        res.redirect('/celebs')
    })
    .catch((err)=>{
        next(err);
    })
})
router.get('/celebs/:id/edit', (req, res, next)=>{
    let id = req.params.id;
    Celebrity.findById(id)
    .then((result)=>{
        res.render('celebrities/edit', {result})
    })
    .catch((err)=>{
        next(err);
    })
})
router.post('/celebs/:id', (req, res, next)=>{
    let id = req.params.id;
    Celebrity.findByIdAndUpdate(id,{
        name: req.body.theName,
        occupation: req.body.theOccupation,
        catchphrase: req.body.theCatchphrase

    }, {new: true})
    .then((result)=>{
        res.redirect(`/celebs/details/${result._id}`)
    })
    .catch((err)=>{
        next(err);
    })

})

module.exports = router;