const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity')
/* GET users listing. */
// router.get('/add', function (req, res, next) {
//   //here we display the books 
//   res.render('book-add')
// });
//route and a views Alle anzeigen 
// GET /celebs
router.get('/', function (req, res, next) {
  Celebrity.find().then((dataWhatever) => {
    res.render('celebrities/index', { celebrities: dataWhatever }) // takes /goes to hbs
  })
    .catch((error) => {
      console.log(error);
    })
});


router.get('/new', (req, res, next) => {
  Celebrity.findOne({ _id: req.query.celebrity_id })
    .then((celeb) => {
      // console.log("celeb : ", celeb)
      res.render("celebrities/new", { celeb });
    })
    .catch((error) => {
      console.log("something is wrong", error);
    })
});

// /celebs/create new
router.post('/', function (req, res, next) {
  const { name, occupation, catchPhrase } = req.body; // safer to put it into an object, because the browser wouldn't show
  // console.log("name", name)
  const newCelebrity = new Celebrity({
    name,
    occupation,
    catchPhrase
  })
  newCelebrity.save()  // could use Celebrity.create then I don't need variable const
    .then(() => {
      res.redirect('celebrities');
    })
    .catch((error) => {
      console.log(error);
      res.render('celebrities/new')
    })
});

router.get('/:celeb_id/edit', (req, res, next) => {
  Celebrity.findById(req.params.celeb_id).then((result) => {
    res.render("celebrities/edit", result);
  })
    .catch((error) => {
      console.log("something is wrong", error);
    })
})
// edit celeb
router.post('/:celeb_id', function (req, res, next) {
  const { name, occupation, catchPhrase } = req.body; // safer to put it into an object, because the browser wouldn't show
  // console.log("name", name)

  Celebrity.update({ _id: req.params.celeb_id }, {
    name,
    occupation,
    catchPhrase
  })  // could use Celebrity.create then I don't need variable const
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      console.log(error);
      res.render('celebrities/new')
    })
});

router.get('/:id/delete', (req, res, next) => {
  console.log(req.params.id)

  Celebrity.findOneAndDelete({ "_id": req.params.id }) //best Mir-Practice to use findOneAndDelete
    .then((celeb) => {
      // res.render("book-delete", { book });
      res.redirect("/celebrities")
    })
    .catch((error) => {
      console.log("something is wrong", error);
    })
});

router.get('/:Id', (req, res, next) => {
  Celebrity.findOne({ "_id": req.params.Id })
    .then(celeb => {
      res.render("celebrities/show", { celebrity: celeb }); //takes/goes to hbs
    })
    .catch((error) => {
      console.log(error);
    })
});









module.exports = router;