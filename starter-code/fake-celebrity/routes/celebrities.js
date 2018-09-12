const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity')


router.get('/celebrities/index', (req, res, next) => {
  Celebrity.find()
    .then((data) => {
      console.log(data)
      res.render('celebrities/index', {
        data: data
      });
    })
    .catch(next)
});

router.post('/celebrities/create', (req, res, next) => {
  let name = req.body.name
  let ocup = req.body.ocuppation
  let catchP = req.body.catchPhrase
  console.log(req.body.image)
  let allinfo = {
    name: name,
    image: req.body.image,
    ocupation: ocup,
    catchPhrase: catchP
  }
  Celebrity.create(allinfo)
    .then((data) => {
      console.log(data)
      res.redirect('/celebrities/index', )
    })
    .catch((err) => {
      next(err)
      res.redirect('/celebrities/new')
      // res.send(err.errors.name.message)

    })
})

router.get('/celebrities/new', (req, res, next) => {

  res.render('celebrities/new')
})

router.get('/celebrities/:id/edit', (req, res, next) => {
  console.log(req.params.id)
  var id = req.params.id
  // console.log("=====================")
  Celebrity.findById(id)
    .then((data) => {
      console.log(data)
      res.render("celebrities/edit", {
        id: id,
        data: data
      })
    })

})

router.post('/celebrities/update/:id', (req, res, next) => {
  console.log(req.params.id)
  let id = req.params.id
  console.log(req.body)
  let update1 = {
    name: req.body.name,
    image: req.body.image,
    ocupation: req.body.ocuppation,
    catchPhrase: req.body.catchPhrase,
  }

  Celebrity.findByIdAndUpdate(id, update1)
    .then((data) => {
      res.redirect('/celebrities/index')
    })
    .catch(next)
})


router.get('/celebrities/:id/delete', (req, res, next) => {
  console.log(req.params.id)
  var id = req.params.id
  Celebrity.findByIdAndRemove(req.params.id)
    .then((data) => {
      res.redirect('/celebrities/index')
    })
    .catch(next)
})

router.get('/celebrities/:id', (req, res, next) => {
  console.log(req.params.id)
  var id = req.params.id
  Celebrity.findById(id)
    .then((data) => {
      // console.log(data)
      res.render("celebrities/show", {
        oneCeleb: data
      })
    })
    .catch(next)
});








module.exports = router;
