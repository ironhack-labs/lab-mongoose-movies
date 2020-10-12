const express = require('express');
const router  = express.Router();

const CelebrityModel = require('../models/celebrity-model')

/* GET home page */
router.get('/celebrities', (req, res, next) => {
  console.log("Hello")
    CelebrityModel.find()
      .then((celebrities) => {
        console.log(celebrities)

        res.render('celebrities/index.hbs', {celebrities})
      })
      .catch((err) => {
        console.log('Oh-no!', err)
        next()
      })
  });

  router.get('/celebrities/:id', (req, res, next) => {
    let myId = req.params.id
    
    CelebrityModel.findById(myId)
      .then((result) => {
        console.log(result)
        res.render('celebrities/show.hbs', {result})
      })
      .catch((err) => {
        console.log('Oh-no! there is an error', err)
        next()
      })
    });

    router.get('/celebrities/new', (req, res, next) => {
      res.render('celebrities/new')
    });

    router.post('/celebrities', (req, res, next) => {
      // console.log("Req body is :", req.body)
      CelebrityModel.create(req.body)
        .then(() => {
          res.redirect('/celebrities') 
        })
      
    });

    router.post('/celebrities/:id/delete', (req, res, next) => {
      // console.log("Req body is :", req.body)
      let myId = req.params.id
      CelebrityModel.findByIdAndDelete(myId)
        .then(() => {
          res.redirect('/celebrities') 
        })
      
    });

module.exports = router;