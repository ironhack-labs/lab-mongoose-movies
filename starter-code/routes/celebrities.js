var express = require('express');
var router = express.Router();

const Celebrity = require('../models/celebrity');

router.get('/', (req, res, next) => {
    Celebrity.find()
    .then(celebrity => {
        res.render('celebrities/index', {celebrity});
    })
    .catch(e => next(e));
});
//Show a form to create a celebrity
router.get('/new', (req, res, next) =>{
    res.render('celebrities/new');
});

//Show a specific celebrity
router.get('/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
      .then(celebrityId => {
        res.render('celebrities/show', { celebrityId });
      })
      .catch(e => next(e));
  });

//Send the data from the form to this route to create the celebrity and save to the database
router.post('/add', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    const newCelebrity = new Celebrity({ name, occupation, catchPhrase})
    newCelebrity.save()
    .then((celeb) => {
        console.log(`${celeb} celebrity, added to our database!`)
        res.redirect('/celebrities');
    })
    .catch(e => next(e));
  });
//Delete data
  router.post("/:id/delete", (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
      .then(() => res.redirect("/celebrities"))
      .catch(e => next(e));
  });
 // Show a form to edit a celebrity
  router.get("/:id/edit", (req, res, next) => {
    Celebrity.findById(req.params.id)
      .then(celebrityEdit => {
        res.render("celebrities/edit", {celebrityEdit});
      })
      .catch(e => next(e));
  });
//Send the data from the form to this route to update and save the celebrity from the database
  router.post ('/:id', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;//data added by the user in the form
    const {id} = req.params;//get URL path parameter: id >> aka celebrityId
    Celebrity.update({_id: id},
        {$set: {name, occupation, catchPhrase}})
        .then(() => {
        res.redirect('/celebrities');
        })
        .catch(next)
});

module.exports = router;