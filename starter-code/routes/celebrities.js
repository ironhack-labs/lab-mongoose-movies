const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js')


/* GET home page */
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
  .then((celebrities) => {
    res.render("celebrities/index", { celebrities })
  })
  .catch(next)
});

router.get('/celebrities/new', (req,res,next) => {
    res.render('celebrities/new')
})

router.get('/celebrities/:id', (req,res,next) => {
    let celebrityId = req.params.id;
    console.log(celebrityId);
    
    Celebrity.findOne({'_id': celebrityId})
    .then(celebrity => {
        res.render('celebrities/show', { celebrity });
    })
    .catch(next)
})

router.post('/celebrities/new', (req,res,next) => {
    const { name, occupation, catchPhrase } = req.body;
    const newCeleb = new Celebrity({ name, occupation, catchPhrase })
    newCeleb.save()
    .then((/* celebrity */) => {
        res.redirect('../celebrities')
    })
    .catch(() => {
        res.render('celebrities/new')
    })
})

router.post('/celebrities/delete/:id', (req,res,next) => {
    console.log("HEREEEEEEEEEEEEEEEEEEEEEEEEEEEE");
    console.log(req.params.id);
    console.log(req.body);
    let celebrityId = req.params.id;
    Celebrity.findOneAndDelete({'_id': celebrityId})
    .then(() => {
        res.redirect('/celebrities')
    })
    next();
})


module.exports = router;