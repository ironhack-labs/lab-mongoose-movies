const express = require('express');
const router = express.Router();

const Celebrities = require('../models/celebrity')


/* GET celebrities page */
router.get('/', (req, res, next) => {
  Celebrities.find().then((celebrities) => {

    console.log("celebrities list from Database:", celebrities)
    res.render('celebrities/index', {
      celebritiesList: celebrities
    });

  })

});

// GET celebrities/new page (form)
router.get('/new', (req, res, next) => {

  res.render('celebrities/new');

});

//Create new celebrity
router.post('/new', (req, res) => {

  console.log("req.body", req.body)

  let celebrity = new Celebrities({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })

  celebrity.save().then(() => {
    res.redirect('/celebrities')
    //res.redirect('/books')
  })

})

//Delete celebrity
router.post('/delete/:id', (req, res) => {

  console.log('deleting')
  Celebrities.findByIdAndRemove(req.params.id).then(() => {
    res.redirect('/celebrities')
  })

})



/* GET celebrities/id page  */
router.get('/:id', (req, res, next) => {
  Celebrities.findById(req.params.id).then((celebrityDetail) => {

    console.log("celebrity Details:", celebrityDetail, "and id:", req.params)
    res.render('celebrities/show', {
      detailArray: celebrityDetail
    });

  })

});

//GET update celebrities

/* GET celebrities/id page  */
router.get('/edit/:id', (req, res, next) => {
  Celebrities.findById(req.params.id).then((celebrityDetail) => {

    console.log("celebrity Details:", celebrityDetail, "and id:", req.params)
    res.render('celebrities/edit', {
      detailArray: celebrityDetail
    });

  })

});



//POST edit celebrity

router.post('/edit/:id', (req, res) => {

  console.log("req.body", req.body)

  Celebrities.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }).then(() => {
    res.redirect('/celebrities')
    //res.redirect('/books')
  })

})








module.exports = router;