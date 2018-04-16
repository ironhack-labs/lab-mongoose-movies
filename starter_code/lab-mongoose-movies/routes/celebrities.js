const express = require('express');
const router  = express.Router();

const Celebrity = require("../models/celebrity");

// Route to Show all celebrities.
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      console.log({celebrities});
      res.render("celebrities/index", {celebrities});

    })
    .catch(error => {
      console.log(error)
    })
  
});


// ADD new celebrity
router.post('/', (req, res, next) => {
 
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  newCelebrity.save()
  .then((myCelebrity) => {  
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log ("Couldn't add new celebrity");
    res.redirect("/celebrities/new");
  })
});



/* GET home page */
router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});



// Route to Show a specific celebrity.
router.get('/:id', (req, res, next) => {
  let celebID = req.params.id;
  Celebrity.findOne({'_id': celebID})
  .then(celebrityInfo => {
    console.log(`Found celebrity ${celebID}`);
    console.log(celebrityInfo);
    res.render("celebrities/show", {celebrityInfo})
  })
  .catch(error => {
    console.log("Error getting Celebrity by ID...")
  })
  
});


// Route to DELETE a specific celebrity.
router.post('/:id/delete', (req, res, next) => {
  let celebID = req.params.id;
  Celebrity.findByIdAndRemove({'_id': celebID})
  .then(celebrityInfo => {
    res.redirect('/celebrities');
  })
  .catch(error => {
    console.log("Error deleting Celebrity by ID...")
    console.log(error);
  })
  
});


// Route to show an UPDATE form a specific celebrity.
router.get('/:id/edit', (req, res, next) => {
  let celebID = req.params.id;
  Celebrity.findOne({'_id': celebID})
  .then(celebrityInfo => {
    res.render("celebrities/edit", {celebrityInfo})
  })
  .catch(error => {
    console.log("Error getting Celebrity by ID...")
  })
  
});

// Route to UPDATE a specific celebrity.
router.post('/:id/edit', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const updates = { name, occupation, catchPhrase };
  Celebrity.findByIdAndUpdate(req.params.id, updates).then(() => {
    res.redirect("/celebrities");
  });
});


module.exports = router;
