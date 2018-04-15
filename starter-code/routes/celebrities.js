const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/", (req, res) => {
  Celebrity.find()
    .then(celebrities => {

      const data = {
        title: "Celebrities",
        celebrities: celebrities
      };
      res.render("celebrities/index", data);
    })
    .catch(err => console.log(err));
});

/* CRUD Create new element */

//GET
router.get('/new', (req,res) => {
  res.render('celebrities/new')
})

//POST
router.post('/', (req,res) => {

  const {name, occupation, catchPhrase} = req.body;
  const celebrity = new Celebrity({ name, occupation, catchPhrase });
  celebrity.save()
    .then( () => {
      res.redirect('/celebrities')
    })
    .catch(err => console.log(err))
})

/* CRUD Retrieve element by ID */

router.get('/:id', (req,res) => {

  celebrityId = req.params.id;

  Celebrity.findById(celebrityId)
    .then( celebrity => {

      const data = {
        title: celebrity.name,
        celebrity: celebrity
      };
      res.render('celebrities/show', data)
    })
    .catch(err => console.log(err))
})

/* CRUD Delete element */
router.post('/:id/delete', (req, res) => {
  
  Celebrity.findByIdAndRemove(req.params.id)
    .then( () => res.redirect('/celebrities'))
    .catch(err => console.log(err))
})

module.exports = router;
