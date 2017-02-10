const express = require('express');
const Celebrity = require('../models/celebrity');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>{
  Celebrity.find({}, (err, celebrities) => {
    if (err) {
      next(err);
    }
    else {
        res.render('celebrities/index', { celebrities });
      }
  });

});

//RENDER THE MAIN FORM
router.get('/new', (req, res) => {
  res.render('celebrities/new');
});



router.get("/:id", (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findById(celebrityId, (err, celebrities) =>{
    if (err) {
      next(err);
    } else {
      res.render("celebrities/show", {celebrities});
    }
  });
});

router.get("/:id/edit", (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findById(celebrityId, (err, celebrity) =>{
    if (err) {
      next(err);
    } else {

      res.render("celebrities/edit", celebrity );
    }
  });
});




// ---------------------------------------------------------
//FORM POST ROUTE
//GATHERING FORM INFO, CREATING THE NEW CELEBRITY
router.post('/', (req, res, next)=>{
  let newCeleb = {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
  };


  const createdCelebrity = new Celebrity(newCeleb);


  createdCelebrity.save((err) => {
   if (err) {
     next(err);
   } else {
     res.redirect("/celebrities");
   }
});

});


// ---------------------------------------------------------

//DELETE THE CELEBRITY POST - ROUTE
router.post("/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id, (err, celebrities) => {
    if (err) {
      next(err);
    } else {
      res.redirect("/celebrities");
    }
  });
});

// router.get('/edit', (req, res) => {
//   res.render('celebrities/edit');
// });

//EDIT POST ROUTE
router.post("/:id/update", (req, res, next) => {
  let newCeleb = {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
  };
  Celebrity.findByIdAndUpdate(req.params.id, newCeleb, (err, celebrities) => {
    if (err) {
      next(err);
    }
    else {
      res.redirect('/celebrities');
  }
});
});








module.exports = router;
