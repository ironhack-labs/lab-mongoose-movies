const express = require('express');
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(celebrities_data => {
//    console.log(celebrities_data)
    res.render("celebrities/index", { celebrities_data });
  })
  .catch(error => { console.log(error) })
});

// POST new celebrity
router.post('/new', (req, res) => {
  const { name, ocupation, catchPhrase } = req.body;
  const celeb = new Celebrity({ name, ocupation, catchPhrase })

  celeb.save()
  .then(celeb => {
    //console.log(celeb);
    res.redirect("/celebrities");
  })
  .catch(error => { res.redirect("celebrities/new") })
});

// GET new celebrity
router.get('/new', (req, res) => {
  Celebrity.findById(req.params.id)
  .then(celeb_data => {
//    console.log(celeb_data);
    res.render("celebrities/new", { celeb_data });
  })
  .catch(error => { console.log(error) })
});

// GET Id show data 
router.get('/:id', (req, res) => {
  Celebrity.findById(req.params.id)
  .then(celeb_data => {
//    console.log(celeb_data);
    res.render("celebrities/show", { celeb_data });
  })
  .catch(error => { console.log(error) })
});

router.post('/:id/delete', (req, res) => {
  Celebrity.findByIdAndRemove(req.params.id)
  .then(celeb_data => {
//    console.log(celeb_data);
    res.redirect("/celebrities");
  })
    .catch(error => {
      console.log(error)
    })
});

router.get('/:id/edit', (req, res) => {
  Celebrity.findById(req.params.id)
  .then(celeb_data => {
//    console.log(celeb_data);
    res.render("celebrities/edit", { celeb_data });
  })
  .catch(error => { console.log(error) })
});

router.post("/:id/edit", (req, res) => {
  const { name, ocupation, catchPhrase } = req.body;
  const updates = { name, ocupation, catchPhrase };

  Celebrity.findByIdAndUpdate(req.params.id, updates)
  .then(() => {
    res.redirect("/celebrities");
  });
});


module.exports = router;