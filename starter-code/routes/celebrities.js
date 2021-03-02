const express = require('express');
const Celebrity = require('../models/celebrity');
const router  = express.Router();

/* GET celeb page */
router.get('/index', (req, res, next) => {
  
Celebrity.find()
    .then((celebs) => {res.render('celebrities/index', {celebs})})
    .catch(err => next(err))
});

/* GET celeb details  page */ 

router.get('/:id([a-z0-9]{24})', (req, res, next) => {
  
Celebrity.findById(req.params.id)
    .then((celeb) => {res.render('celebrities/show', celeb); console.log(celeb);})
    .catch(err => next(err))
});

// ------- create -------

// GET add page 

router.get('/add', (req, res) => {
    res.render('celebrities/add')
})

// POST add page

router.post('/', (req, res, next) => {
    const newCeleb = {...req.body}

    Celebrity.create(newCeleb)
    .then(res.redirect("/celebrities/index"))
    .catch(err => next(err))

})


// ------------ delete --------------

router.get('/:id([a-z0-9]{24})/delete', (req, res, next) => {
  
    Celebrity.findByIdAndDelete(req.params.id)
        .then(res.redirect('/celebrities/index'))
        .catch(err => next(err))
    });


// ------------ edit ----------------

// GET edit page

router.get("/:id([a-z0-9]{24})/edit", (req, res, next) => {

    Celebrity.findByIdAndUpdate(req.params.id)
    .then(celeb => {res.render('celebrities/edit', celeb)})
    .catch(err => next(err));


})


// POST edit page
        

router.post('/:id', (req, res, next) => {

    const updateCeleb = {...req.body}

    Celebrity.findByIdAndUpdate(req.params.id, updateCeleb)
    .then(res.redirect("/celebrities/index"))
    .catch(err => next(err))

})



module.exports = router;
