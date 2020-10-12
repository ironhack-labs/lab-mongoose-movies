const express = require('express');
const router  = express.Router();
const CelebModel = require('../models/celeb.model')
const bodyParser = require('body-parser');

/* GET home page */
router.get('/celebrities/index', (req, res, next) => {
  CelebModel.find()
    .then((celebs) => {
      res.render('celebrities/index.hbs', {celebs})
    })
    .catch((err)=>{console.log('error in home page creation', err)})
});



router.get('/celebrities/new', (req, res, next) => {
   res.render('celebrities/new.hbs')
});

router.post('/celebrities', (req, res, next) => {
  CelebModel.create(req.body)
    .then(() => {
      res.redirect('celebrities/index')
    })
    .catch((err)=>{
      console.log('error in custom creation', err)
      res.redirect('/celebrities/new')
    })
});

router.get('/celebrities/:id', (req, res, next) => {
  const id = req.params.id
  CelebModel.findById(id)
    .then((celeb) => {
      res.render('celebrities/show.hbs', {celeb})
    })
    .catch((err)=>{console.log('error in custom creation', err)})
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  const id = req.params.id;
  CelebModel.findByIdAndDelete(id)
    .then(() => {
      console.log("Celebrity was deleted successfully.");
      res.redirect("/celebrities/index");
    })
    .catch((err) => {
      console.log("Something has gone horribly wrong in the delete function.", err);
    });
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  const id = req.params.id;
  CelebModel.findById(id)
    .then((celeb) => {
      res.render("celebrities/edit.hbs", {celeb});
    })
    .catch((err) => {
      console.log("Something has gone horribly wrong in get /edit.", err);
      res.redirect("/celebrities/create");
    });
});

router.post("/celebrities/:id/edit", (req, res, next) => {
  const id = req.params.id;
  CelebModel.findByIdAndUpdate(id, { $set: req.body })
    .then(() => {
      console.log("Data was updated successfully.");
      res.redirect("/celebrities/index");
    })
    .catch((err) => {
      console.log("Something has gone horribly wrong in editing.", err);
      res.redirect("/celebrities/index");
    });
});

module.exports = router;