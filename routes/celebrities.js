const express = require('express');
const router = express.Router();
const Celebrity = require("../models/Celebrity");

//Index
router.get('/', (req, res, next) => {
  Celebrity.find().then(celebrities_data => {
    //debug(celebrities_data);
    console.log(celebrities_data)
    res.render("celebrities/index", { celebrities_data });
  })
    .catch(error => {
      console.log(error)
    })
});

//New celebrity GET
router.get('/new', (req, res, next) => {
  Celebrity.findById(req.params.id).then(celeb_data => {
    //debug(celebrities_data);
    console.log(celeb_data)
    res.render("celebrities/new", { celeb_data });
  })
    .catch(error => {
      console.log(error)
    })
});

//New celebrity POST
router.post('/', (req, res, next) => {
  const { name, ocupation, catchPhrase } = req.body;
  const celeb = new Celebrity({name, ocupation, catchPhrase})

  Celebrity.save().then(celeb => {
    console.log(celeb)
    res.render("celebrities/show", { celeb_data });
  })
    .catch(error => {
      res.redirect("celebrities/new")
    })
});

//Id to show data 
router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id).then(celeb_data => {
    //debug(celebrities_data);
    console.log(celeb_data)
    res.render("celebrities/show", { celeb_data });
  })
    .catch(error => {
      console.log(error)
    })
});






module.exports = router;