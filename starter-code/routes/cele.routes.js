const express = require('express');
const router  = express.Router();
const Cele = require('../models/Cele.model')

router.get('/celebrities', (req, res, next) =>{
    Cele.find()
    .then((celeList)=>{
        console.log(`Celebrities-List:${celeList}`);
        res.render('celebrities-list', {celeList})
    })
    .catch(err => console.log(`Error finding List ${err}`))
});

router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities-new')
});

router.post('/celebrities/new', (req, res, next) => {
    Cele.create(req.body)
    .then(celebrityFormDB => {
        console.log("Yes, we saved your book in the DB!!")
        res.redirect('/celebrities');
    })
})

router.get('/celebrities/:celeId', (req, res, next) => {
    Cele.findById(req.params.celeId)
    .then(celebrity => {
        res.render('celebrities-show', {celebrity})
    })
    .catch(err => console.log(`Error finding Details ${err}`))
});

router.get('/celebrities/:celeId/edit', (req, res, next) => {
    Cele.findById(req.params.celeId)
    .then(celebrity => {
        res.render('celebrities-edit', celebrity)
    })
    .catch(err => console.log(`Error editing ${err}`))
})

router.post('/celebrities/:celeId/edit', (req, res, next) => {
    Cele.findByIdAndUpdate(req.params.celeId, req.body, {new: true})
    .then(celebrityDetail => {
        res.redirect('/celebrities')
    })
    .catch(err => console.log(`Error editing ${err}`))
})

router.post('/celebrities/:celeId/delete', (req, res, next) => {
    Cele.findByIdAndDelete(req.params.celeId)
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch(err => console.log(`Error deleting ${err}`))
  });
  




module.exports = router;